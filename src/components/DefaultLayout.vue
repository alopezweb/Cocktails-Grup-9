
<script setup>
import Header from './Header.vue'
import Banner from './Banner.vue';
import Nav from './Nav.vue'
import Footer from './Footer.vue'
</script>

<template>
  <div class="layout">
    <Header />
    <Banner/>
    <Nav />
    <main>
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<style scoped>
</style>
