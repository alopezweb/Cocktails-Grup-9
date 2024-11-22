<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Banner from './components/Banner.vue';
import Nav from './components/Nav.vue'
import Footer from './components/Footer.vue'
// import HeaderPropTest from './components/HeaderPropTest.vue';

</script>

<template>
<body>
    <!-- <HeaderPropTest/> -->
    <Header />
    <Banner/>
    <Nav />
    <main class="main">
      <RouterView />
    </main>
    <Footer />

</body>
</template>

<style>
.main{
  min-height: 150px;
  background: rgb(54,47,42);
background: -moz-linear-gradient(0deg, rgba(54,47,42,1) 0%, rgba(0,0,0,1) 100%);
background: -webkit-linear-gradient(0deg, rgba(54,47,42,1) 0%, rgba(0,0,0,1) 100%);
background: linear-gradient(0deg, rgba(54,47,42,1) 0%, rgba(0,0,0,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#362f2a",endColorstr="#000000",GradientType=1); 
}
.header, .nav, .footer{
  background: #362F2A
}
.banner{
  background: #000;
}
.button{
  background: #362F2A;
  color: #edeae8;
  min-width: 100px;
}
button:hover{
  opacity: .8;
}
.secondary-button {
  background: #fff;
  color: #362F2A;
  border: #362F2A solid 1px;
  padding: 7px 20px;
}
button {
  transition: background-color 0.3s ease;
}
</style>
