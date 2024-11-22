<template>
  <div class="banner h-64 flex items-center justify-center">
    <img
      v-if="cocktailOfTheDay"
      :src="cocktailOfTheDay.image"
      alt="Cocktail of the Day"
      class="absolute top-0 left-0 w-full h-full object-cover z-0"
    />

    <div class="text-container relative z-10">
      <h2 class="text-4xl font-bold">El cóctel del día:</h2>
      <p v-if="cocktailOfTheDay" class="text-text-4xl font-semibold mt-1">
        {{ cocktailOfTheDay.name }}
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref, onMounted } from "vue";

export default {
  setup() {
    const cocktailOfTheDay = ref(null);
    const apiUrl = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

    const fetchRandomCocktail = async () => {
      try {
        const response = await axios.get(apiUrl);
        const cocktailData = response.data.drinks[0];

        cocktailOfTheDay.value = {
          name: cocktailData.strDrink,
          image: cocktailData.strDrinkThumb,
        };
      } catch (error) {
        console.error("Error al obtener el cóctel del día:", error);
      }
    };

    onMounted(() => {
      fetchRandomCocktail();
    });

    return {
      cocktailOfTheDay,
    };
  },
};
</script>

<style scoped>
.banner {
  display: block;
  overflow: hidden;
  position: relative;
}
.banner:after{ 
  content: "";
  background: rgba(0,0,0, 0.64);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  }

.banner img {
  position: absolute;
  z-index: 0;
}

.text-container {
  position: relative;
  z-index: 10;
  color: #fff;
  text-align: center;
  padding: 0 16px;
  top: 30px;
}

.text-container h2 {
  position: relative;
  font-size: 1.32rem;
  font-weight: 300;
}

.text-container p {
  font-size: 2rem;
  line-height: 2.5rem;
  font-weight: 600;
  padding: 0 16px;
  font-family: "Playfair Display", serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
}
</style>
