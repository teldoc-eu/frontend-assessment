import { createApp } from 'vue';
import { createHead } from '@vueuse/head';
import App from './App.vue';

import './styles/main.scss';

// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
const app = createApp(App);
const head = createHead({ title: 'Weather App' });

app.use(head);

app.mount('#app');
