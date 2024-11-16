<template>
  <div class="cocktail-grid">
    <div 
      class="cocktail-card" 
      v-for="cocktail in cocktails" 
      :key="cocktail.idDrink"
      @click="viewDetails(cocktail.idDrink)">
      <img :src="cocktail.strDrinkThumb" alt="Imatge del còctel" class="cocktail-image" />
      <h3>{{ cocktail.strDrink }}</h3>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      cocktails: [],
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
    viewDetails(idDrink) {
      this.$router.push({ name: 'Cocktail', params: { idDrink } });
    },
  },
};
</script>

<style scoped>
.cocktail-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

.cocktail-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  transition: transform 0.2s;
  cursor: pointer;
}

.cocktail-card:hover {
  transform: scale(1.05);
}

.cocktail-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
}
</style>

