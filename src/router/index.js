import { createRouter, createWebHistory } from 'vue-router';
import ListaCocktais from '@/components/ListaCocktails.vue';
import Cocktail from '@/components/Cocktail.vue';

const routes = [
  { path: '/', name: 'ListaCocktails', component: ListaCocktais },
  { path: '/cocktail/:idDrink', name: 'Cocktail', component: Cocktail, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
