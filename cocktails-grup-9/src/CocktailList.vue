<template>
    <div>
      <h1>Cocktails con Vodka</h1>
      <ul>
        <li v-for="cocktail in cocktails" :key="cocktail.idDrink">
          {{ cocktail.strDrink }}
        </li>
      </ul>
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
          const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka');
          console.log(response)
          this.cocktails = response.data.drinks;
        } catch (error) {
          console.error('Error fetching cocktails:', error);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  h1 {
    text-align: center;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    padding: 8px;
    border: 1px solid #ccc;
    margin: 5px 0;
  }
  </style>