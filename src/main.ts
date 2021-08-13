import { createApp } from 'vue';
import i18n from '@/plugins/vue-i18n';
import App from './App.vue';
import router from './router';
import store from './store';

import './assets/scss/styles.scss';

const app = createApp(App).use(store).use(router).use(i18n);

app.mount('#app');
