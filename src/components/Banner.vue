<template>
  <div class="banner bg-gray-300 h-64 flex items-center justify-center">
    <img
      v-if="cocktailOfTheDay"
      :src="cocktailOfTheDay.image"
      alt="Cocktail of the Day"
      class="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-90"
    />

    <div class="text-container relative z-10">
      <h2 class="text-4xl font-bold">El cóctel del día:</h2>
      <p v-if="cocktailOfTheDay" class="text-2xl font-semibold mt-4">
        {{ cocktailOfTheDay.name }}
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      cocktailOfTheDay: null,
      apiUrl: "https://www.thecocktaildb.com/api/json/v1/1/random.php",
    };
  },
  methods: {
    async fetchRandomCocktail() {
      try {
        const response = await axios.get(this.apiUrl);
        const cocktailData = response.data.drinks[0];

        this.cocktailOfTheDay = {
          name: cocktailData.strDrink,
          image: cocktailData.strDrinkThumb,
        };
      } catch (error) {
        console.error("Error al obtener el cóctel del día:", error);
      }
    },
  },
  mounted() {
    this.fetchRandomCocktail();
  },
};
</script>

<style scoped>
.banner {
  display: block;
  border: 2px dotted #0ff !important;
  overflow: hidden;
  position: relative;
}

.banner img {
  position: absolute;
  z-index: 0;
  opacity: 0.9;
}

.text-container {
  position: relative;
  z-index: 10;
  color: white;
  text-align: center;
  padding: 10px;
  border-radius: 8px;
  margin: 0 20px;
}

.text-container h2 {
  position: relative;
  top: 30px;
  left: 30px;
  font-size: 2rem;
  font-weight: 300;
}

.text-container p {
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 45px;
}
</style>
