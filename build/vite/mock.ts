import path from 'path';
import { normalizePath } from 'vite';
import { viteMockServe } from 'vite-plugin-mock';

function getDefaultPath() {
  return path.resolve(process.cwd(), `src/main.ts`);
}

export function createMock(command: string, mode: string) {
  let tempConfig = viteMockServe({
    mockPath: 'mock',
    enable: mode === 'mock',
    logger: true,
  });
  const defaultPath = getDefaultPath();
  const defaultEnter = normalizePath(defaultPath);
  tempConfig = {
    ...tempConfig,
    async transform(code, id) {
      if (!id.endsWith(defaultEnter)) {
        return null;
      }
      // build && mock
      if (command === 'build' && mode === 'mock') {
        const injectCode = `
          import { setupProdMockServer } from './mockProdServer';
          setupProdMockServer();
        `;
        return {
          map: null,
          code: `${injectCode}\n${code}`,
        };
      }
      return null;
    },
  };
  return tempConfig;
}
