<template>
  <div class="container mx-auto p-4">
    <button @click="$router.back()" class="text-blue-500 mb-4">← Tornar</button>
    <h2 class="text-3xl font-bold mb-4">{{ cocktail.strDrink }}</h2>
    <div class="flex items-center mb-4">
      <button class="mr-4 p-2 text-gray-500 hover:text-blue-500" title="Compartir">
        <i class="fas fa-share-alt"></i> Compartir
      </button>
      <button class="p-2 text-gray-500 hover:text-red-500" title="Afegir a favorits">
        <i class="fas fa-heart"></i> Guardar
      </button>
    </div>
    <img :src="cocktail.strDrinkThumb" alt="Imatge del còctel" class="w-full h-64 object-cover rounded mb-4" />
    <h4 class="text-lg font-semibold">Ingredients:</h4>
    <ul class="list-disc list-inside mb-4">
      <li v-for="ingredient in ingredients" :key="ingredient">{{ ingredient }}</li>
    </ul>
    <h4 class="text-lg font-semibold">Descripció:</h4>
    <p class="text-gray-700">{{ cocktail.strInstructions }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: {
    idDrink: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      cocktail: {},
      ingredients: [],
    };
  },
  mounted() {
    this.fetchCocktailDetails();
  },
  methods: {
    async fetchCocktailDetails() {
      try {
        const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${this.idDrink}`);
        this.cocktail = response.data.drinks[0];
        this.extractIngredients();
      } catch (error) {
        console.error('Error fetching cocktail details:', error);
      }
    },
    extractIngredients() {
      this.ingredients = [];
      for (let i = 1; i <= 15; i++) {
        const ingredient = this.cocktail[`strIngredient${i}`];
        const measure = this.cocktail[`strMeasure${i}`];
        if (ingredient) {
          this.ingredients.push(`${measure || ''} ${ingredient}`.trim());
        }
      }
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: auto;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

button {
  cursor: pointer;
}

ul {
  padding-left: 1.5rem;
}
</style>
