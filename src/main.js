// main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Fitrah Rahmadanu';
  next();
});

app.use(router).mount('#app');
