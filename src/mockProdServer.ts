import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer';

// Import your mock .ts files one by one
// If you use vite.mock.config.ts, just import the file directly
// You can use the import.meta.glob function to import all
import dictModule from '../mock/system/dict';
import userModule from '../mock/system/user';
import menuModule from '../mock/system/menu';

export function setupProdMockServer() {
  createProdMockServer([...dictModule, ...userModule, ...menuModule]);
}
