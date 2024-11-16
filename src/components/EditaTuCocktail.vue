<template>
    <div>
      <h2>Edita tu Cocktail</h2>
      <form @submit.prevent="saveCocktail">
        <input v-model="cocktail.name" placeholder="Cocktail Name" required />
        <input v-model="cocktail.ingredients" placeholder="Ingredients" required />
        <button type="submit">Add</button>
      </form>
    </div>
  </template>
  
  <script>
 // import CocktailService from '../services/CocktailService';
  
  export default {
    data() {
      return {
        cocktail: {
          name: '',
          ingredients: ''
        }
      };
    },
    methods: {
      saveCocktail() {
        CocktailService.update(this.cocktail)
          .then(() => {
            this.$router.push('/');
          })
          .catch(error => {
            console.error("Error adding cocktail: ", error);
          });
      }
    }
  };
  </script>