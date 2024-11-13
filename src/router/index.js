import { createMemoryHistory, createRouter } from "vue-router";

import DefaultLayout from "@/components/DefaultLayout.vue";

import ListaCocktails from "../components/ListaCocktails.vue";
import Cocktail from "../components/Cocktail.vue";
import CreaTuCocktail from "../components/CreaTuCocktail.vue";


const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "/lista-de-cocktails",
        component: ListaCocktails,
      },
      {
        path: "/cocktail",
        component: Cocktail,
      },
      {
        path: "/crea-tu-cocktail",
        component: CreaTuCocktail,
      },
    ],
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
