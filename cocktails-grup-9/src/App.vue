
<template>
  <div id="app">
    <CocktailList  />
   
  </div>
</template>

<script>
import CocktailList from './CocktailList.vue';


export default {
  components: {
    CocktailList
  },
};
</script>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>