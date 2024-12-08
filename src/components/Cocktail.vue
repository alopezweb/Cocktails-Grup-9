<template>
  <div class="container mx-auto p-4">
    <!-- Back Button -->
    <button @click="$router.back()" class="button text-white font-medium py-2 px-5 rounded-full transition">← Back</button>
    

    <!-- Action Buttons (Save and Share) -->
    <div class="flex justify-end space-x-6 mb-4">
      <button
        class="text-red-500"
        title="Save"
        @click="guardarCocktail"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.682l1.318-1.364a4.5 4.5 0 116.364 6.364L12 21.364l-7.682-7.682a4.5 4.5 0 010-6.364z"
          />
        </svg>
      </button>
<!-- Notificación -->
    <div
      v-if="showSaveMessage"
      class="fixed top-4 right-4 bg-gray-500 text-white px-4 py-2 rounded shadow-lg z-50"
    >
      {{ saveMessage }}
    </div>

      <button      
        title="Share"
        @click="compartirCocktail"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          fill="#000000"
          height="20px"
          width="20px"
          version="1.1"
          viewBox="0 0 458.624 458.624"
          xml:space="preserve"
        >
          <g>
            <path
              d="M339.588,314.529c-14.215,0-27.456,4.133-38.621,11.239l-112.682-78.67c1.809-6.315,2.798-12.976,2.798-19.871
              c0-6.896-0.989-13.557-2.798-19.871l109.64-76.547c11.764,8.356,26.133,13.286,41.662,13.286
              c39.79,0,72.047-32.257,72.047-72.047C411.634,32.258,379.378,0,339.588,0c-39.79,0-72.047,32.257-72.047,72.047
              c0,5.255,0.578,10.373,1.646,15.308l-112.424,78.491c-10.974-6.759-23.892-10.666-37.727-10.666
              c-39.79,0-72.047,32.257-72.047,72.047s32.256,72.047,72.047,72.047c13.834,0,26.753-3.907,37.727-10.666l113.292,79.097
              c-1.629,6.017-2.514,12.34-2.514,18.872c0,39.79,32.257,72.047,72.047,72.047c39.79,0,72.047-32.257,72.047-72.047
              C411.635,346.787,379.378,314.529,339.588,314.529z"
            />
          </g>
        </svg>
      </button>

      <!-- Notificación -->
    <div
      v-if="showShareMessage"
      class="fixed top-4 right-4 bg-gray-500 text-white px-4 py-2 rounded shadow-lg z-50"
    >
      {{ shareMessage }}
    </div>
    </div>

    <!-- Cocktail Content -->
    <div v-if="cocktail">
      <h2 class="cocktail-title text-3xl font-bold mb-4">{{ cocktail.strDrink }}</h2>
      <img
        :src="cocktail.strDrinkThumb || '/placeholder.jpg'"
        alt="Cocktail image"
        class="w-full h-64 object-cover rounded-lg mb-4"
      />
      <h4>Ingredients:</h4>
      <ul class="list-disc list-inside mb-3">
        <li v-for="ingredient in ingredients" :key="ingredient">
          {{ ingredient }}
        </li>
      </ul>
      <h4>Instructions:</h4>
      <p class="cocktail-instructions">{{ cocktail.strInstructions }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: {
    idDrink: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      cocktail: null,
      ingredients: [],
      showShareMessage: false,
      shareMessage: "",
      showSaveMessage: false, 
      saveMessage: "",
    };
  },
  mounted() {
    this.fetchCocktailDetails();
  },
  methods: {
    async fetchCocktailDetails() {
      try {
        const response = await axios.get(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${this.idDrink}`
        );
        if (response.data.drinks) {
          this.cocktail = response.data.drinks[0];
          this.extractIngredients();
        } else {
          console.error("No drinks found");
        }
      } catch (error) {
        console.error("Error fetching cocktail details:", error);
      }
    },
    extractIngredients() {
      this.ingredients = [];
      for (let i = 1; i <= 15; i++) {
        const ingredient = this.cocktail[`strIngredient${i}`];
        const measure = this.cocktail[`strMeasure${i}`];
        if (ingredient) {
          this.ingredients.push(`${measure || ""} ${ingredient}`.trim());
        }
      }
    },
   guardarCocktail() {
      // Actualizar mensaje y visibilidad
      this.saveMessage = "The cocktail has been saved to favorites!";
      this.showSaveMessage = true;

      // Ocultar el mensaje después de 3 segundos
      setTimeout(() => {
        this.showSaveMessage = false;
      }, 3000);
    },

  compartirCocktail() {
      const url = window.location.href;

      navigator.clipboard
        .writeText(url)
        .then(() => {
          this.shareMessage = "Cocktail link copied to clipboard!";
          this.showShareMessage = true;

          setTimeout(() => {
            this.showShareMessage = false;
          }, 3000);
        })
        .catch((err) => {
          console.error("Error copying the link:", err);
          this.shareMessage = "Failed to copy the link!";
          this.showShareMessage = true;

          setTimeout(() => {
            this.showShareMessage = false;
          }, 3000);
        });
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: auto;
  background-color: #fff;
  color: #1d1d1f;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
.cocktail-title{
  font-family: "Playfair Display", serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
}
h4{
  font-family: "Playfair Display", serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
  font-size: 19px;
}
.list-disc{
  font-family: "Lexend", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}
.cocktail-instructions{
  font-family: "Lexend", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}
button {
  cursor: pointer;
}
</style>
