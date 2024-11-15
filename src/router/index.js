import { createWebHistory, createRouter } from "vue-router";

// import DefaultLayout from "@/components/DefaultLayout.vue";
import HomeView from "../components/HomeView.vue";
import ListaCocktails from "../components/ListaCocktails.vue";
import Cocktail from "../components/Cocktail.vue";
import CreaTuCocktail from "../components/CreaTuCocktail.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/cocktail/:idDrink",
      name: "Cocktail",
      component: Cocktail,
      props: true,
    },
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/lista-de-cocktails",
      name: "lista-de-cocktails",
      component: ListaCocktails,
    },
    {
      path: "/cocktail",
      name: "cocktail",
      component: Cocktail,
    },
    {
      path: "/crea-tu-cocktail",
      name: "crea-tu-cocktail",
      component: CreaTuCocktail,
    },
  ],
});

export default router;
