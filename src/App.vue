<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Banner from './components/Banner.vue';
import Nav from './components/Nav.vue'
import Footer from './components/Footer.vue'
// import HeaderPropTest from './components/HeaderPropTest.vue';

</script>

<template>
<body class="bg-gray-100">
    <!-- <HeaderPropTest/> -->
    <Header />
    <Banner/>
    <Nav />
    <main>
      <RouterView />
    </main>
    <Footer />

</body>
</template>

<style scoped>
</style>
