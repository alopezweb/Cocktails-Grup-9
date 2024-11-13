<template>
    <div class="cocktail-grid">
      <div class="cocktail-card" v-for="cocktail in cocktails" :key="cocktail.idDrink">
        <img :src="cocktail.strDrinkThumb" alt="cocktail.name" class="cocktail-image" />
        <h3>{{ cocktail.strDrink }}</h3>
        <p>Ingredients: {{ getIngredients(cocktail) }}</p>
      </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      cocktails: []
    };
  },
  mounted() {
    this.fetchCocktails();
  },
  methods: {
    async fetchCocktails() {
      try {
        const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic');
        this.cocktails = response.data.drinks;
      } catch (error) {
        console.error('Error fetching cocktails:', error);
      }
    },
    getIngredients(cocktail) {
      
      return 'Ingredientes no disponibles de la API'; 
    }
  }
};
</script>

<style scoped>
.cocktail-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px; 
}

.cocktail-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  width: 500px;
  padding: 16px;
  margin: 16px 0;
  background-color: #f9f9f9;
  text-align: center;
  transition: box-shadow 0.3s;
}

.cocktail-card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.cocktail-image {
  width: 25%;
  height: 25%;
  border-radius: 4px;
  margin-bottom: 8px;
}
</style>