import { createMemoryHistory, createRouter } from "vue-router";

import DefaultLayout from "@/components/DefaultLayout.vue";

import ListaCocktails from "../components/ListaCocktails.vue"; //llistat de cocktails de la API de lectura
import Cocktail from "../components/Cocktail.vue"; //detalls del cocktail
import CreaTuCocktail from "../components/CreaTuCocktail.vue";
//import EditaTuCocktail from "../components/EditaTuCocktail.vue";
//import CocktailList from './components/CocktailList.vue;

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
      {


      }
   
    ],
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
