import 'tdesign-vue-next/es/style/index.css';
import '@/style/index.less';
import './permission';

import TDesign from 'tdesign-vue-next';
import { createApp } from 'vue';

import { setupGlobDirectives } from '@/directives';

import App from './App.vue';
import router from './router';
import { store } from './store';

const app = createApp(App);

app.use(TDesign);
app.use(store);
app.use(router);

// Register global directive
setupGlobDirectives(app);

app.mount('#app');
