// 源码中的 createProdMockServer 为 async function，复制出来改掉
// import { createProdMockServer } from 'vite-plugin-mock/client';

import mockJs from 'mockjs';
import { pathToRegexp } from 'path-to-regexp';
/* eslint-disable */
const Mock = mockJs as any;
function createProdMockServer(mockList: any[]) {
  Mock.XHR.prototype.__send = Mock.XHR.prototype.send;
  Mock.XHR.prototype.send = function () {
    if (this.custom.xhr) {
      this.custom.xhr.withCredentials = this.withCredentials || false;

      if (this.responseType) {
        this.custom.xhr.responseType = this.responseType;
      }
    }
    if (this.custom.requestHeaders) {
      const headers: any = {};
      for (let k in this.custom.requestHeaders) {
        headers[k.toString().toLowerCase()] = this.custom.requestHeaders[k];
      }
      this.custom.options = Object.assign({}, this.custom.options, { headers });
    }
    this.__send.apply(this, arguments);
  };

  Mock.XHR.prototype.proxy_open = Mock.XHR.prototype.open;

  Mock.XHR.prototype.open = function () {
    let responseType = this.responseType;
    this.proxy_open(...arguments);
    if (this.custom.xhr) {
      if (responseType) {
        this.custom.xhr.responseType = responseType;
      }
    }
  };

  for (const { url, method, response, timeout } of mockList) {
    __setupMock__(Mock, timeout);
    Mock.mock(pathToRegexp(url, undefined, { end: false }), method || 'get', __XHR2ExpressReqWrapper__(Mock, response));
  }
}

function __param2Obj__(url: string) {
  const search = url.split('?')[1];
  if (!search) {
    return {};
  }
  return JSON.parse(
    '{"' +
      decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"').replace(/\+/g, ' ') +
      '"}',
  );
}

function __XHR2ExpressReqWrapper__(_Mock: any, handle: (d: any) => any) {
  return function (options: any) {
    let result = null;
    if (typeof handle === 'function') {
      const { body, type, url, headers } = options;

      let b = body;
      try {
        b = JSON.parse(body);
      } catch {}
      result = handle({
        method: type,
        body: b,
        query: __param2Obj__(url),
        headers,
      });
    } else {
      result = handle;
    }

    return _Mock.mock(result);
  };
}

function __setupMock__(mock: any, timeout = 0) {
  timeout &&
    mock.setup({
      timeout,
    });
}

// Import your mock .ts files one by one
// If you use vite.mock.config.ts, just import the file directly
// You can use the import.meta.glob function to import all
interface ModuleType {
  default: [];
}
const moduleList: any[] = [];
const modules = import.meta.glob<ModuleType>('../mock/**/*.ts', { eager: true });
Object.keys(modules).forEach((key) => {
  const mod = modules[key].default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  moduleList.push(...modList);
});

export function setupProdMockServer() {
  createProdMockServer(moduleList);
}
