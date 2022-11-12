import { type ConfigEnv, type UserConfig, loadEnv } from 'vite';
import { viteMockServe } from 'vite-plugin-mock';
import createVuePlugin from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import svgLoader from 'vite-svg-loader';

import path from 'path';
import proxyConfig from './src/config/proxy';
import { createProxy } from './build/vite/proxy';
import { prefix } from './src/config/global';

const CWD = process.cwd();

// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfig => {
  const { VITE_BASE_URL } = loadEnv(mode, CWD);
  return {
    base: VITE_BASE_URL,
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {
            hack: `true; @import (reference) "${path.resolve('src/style/variables.less')}";`,
            // 全局公共前缀
            '@starter-prefix': prefix,
          },
          math: 'strict',
          javascriptEnabled: true,
        },
      },
    },
    plugins: [
      createVuePlugin(),
      vueJsx(),
      viteMockServe({
        mockPath: 'mock',
        localEnabled: mode === 'mock',
        prodEnabled: command !== 'serve' && mode === 'mock',
        injectCode: `
          import { setupProdMockServer } from './mockProdServer';
          setupProdMockServer();
        `,
      }),
      svgLoader(),
    ],

    server: {
      port: 3002,
      host: '0.0.0.0',
      // mock则不配置vite代理
      ...(mode !== 'mock' ? { proxy: createProxy(proxyConfig[mode].proxy) } : {}),
    },
  };
};
