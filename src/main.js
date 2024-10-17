import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import MainHome from './components/MainHome.vue';  // Импорт обновленного компонента Home
import ProductCategory from './components/ProductCategory.vue';  // Импорт обновленного компонента Category

const routes = [
  {
    path: '/',
    name: 'Home',
    component: MainHome,  // Использование правильного компонента
  },
  {
    path: '/category/:category',
    name: 'Category',
    component: ProductCategory,  // Использование правильного компонента
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount('#app');
