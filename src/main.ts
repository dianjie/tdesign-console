import { createApp } from 'vue';

import TDesign from 'tdesign-vue-next';
import 'tdesign-vue-next/es/style/index.css';

import { store } from './store';
import router from './router';
import { setupGlobDirectives } from '@/directives';
import '@/style/index.less';
import './permission';
import App from './App.vue';

const app = createApp(App);

app.use(TDesign);
app.use(store);
app.use(router);

// Register global directive
setupGlobDirectives(app);

app.mount('#app');
