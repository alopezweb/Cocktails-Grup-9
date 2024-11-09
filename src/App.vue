<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import ListaCocktails from './components/ListaCocktails.vue'
import HeaderPropTest from './components/HeaderPropTest.vue';
import Header from './components/Header.vue';
import Nav from './components/Nav.vue';
import Banner from './components/Banner.vue';
import Footer from './components/Footer.vue';
</script>

<template>
<body class="bg-gray-100">
    <!-- <HeaderPropTest/> -->

<Header/>

<Nav/>

<Banner/>

<ListaCocktails />
 
<Footer />


</body>
</template>

<style scoped>


header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}

</style>
