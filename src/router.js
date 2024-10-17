import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/MainHome.vue'; // Убедитесь, что у вас есть компонент Home
import Category from './components/ProductCategory.vue'; // Импортируйте ваш новый компонент Category


const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/category/:category',
    name: 'Category',
    component: Category,
  },
];



export default new Router({
    mode: 'history',
    routes: [
      {
        path: '/creams',
        name: 'Creams',
        component: MainHome,
        props: { categoryTitle: 'creams' }, // Передаем название категории в качестве пропса
      },
      {
        path: '/lotions',
        name: 'Lotions',
        component: MainHome,
        props: { categoryTitle: 'lotions' }, // Передаем название категории в качестве пропса
      },
      {
        path: '/masks',
        name: 'Masks',
        component: MainHome,
        props: { categoryTitle: 'masks' }, // Передаем название категории в качестве пропса
      },
      // Добавьте маршруты для других категорий...
      {
        path: '*',
        redirect: '/creams', // Редирект на дефолтную категорию
      },
    ],
  });

