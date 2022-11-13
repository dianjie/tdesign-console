import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer';

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
