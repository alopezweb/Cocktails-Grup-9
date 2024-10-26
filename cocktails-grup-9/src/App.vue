<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
<body class="bg-gray-100">

<!-- Header -->
<header class="bg-blue-600 text-white">
    <div class="container mx-auto p-4">
        <h1 class="text-3xl font-bold">My Website</h1>
    </div>
</header>

<!-- Navigation -->
<nav class="bg-blue-500">
    <div class="container mx-auto p-4">
        <ul class="flex space-x-4">
            <li><a href="#" class="text-white hover:underline">Home</a></li>
            <li><a href="#" class="text-white hover:underline">About</a></li>
            <li><a href="#" class="text-white hover:underline">Services</a></li>
            <li><a href="#" class="text-white hover:underline">Contact</a></li>
        </ul>
    </div>
</nav>

<!-- Banner -->
<div class="bg-gray-300 h-64 flex items-center justify-center">
    <h2 class="text-4xl font-bold">Welcome to My Website!</h2>
</div>

<!-- Image List -->
<section class="container mx-auto p-4 mt-8">
    <h3 class="text-2xl font-bold mb-4">Image Gallery</h3>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="bg-white p-4 shadow rounded">
            <img src="https://via.placeholder.com/300" alt="Image 1" class="w-full h-48 object-cover rounded">
        </div>
        <div class="bg-white p-4 shadow rounded">
            <img src="https://via.placeholder.com/300" alt="Image 2" class="w-full h-48 object-cover rounded">
        </div>
        <div class="bg-white p-4 shadow rounded">
            <img src="https://via.placeholder.com/300" alt="Image 3" class="w-full h-48 object-cover rounded">
        </div>
        <div class="bg-white p-4 shadow rounded">
            <img src="https://via.placeholder.com/300" alt="Image 4" class="w-full h-48 object-cover rounded">
        </div>
        <div class="bg-white p-4 shadow rounded">
            <img src="https://via.placeholder.com/300" alt="Image 5" class="w-full h-48 object-cover rounded">
        </div>
        <div class="bg-white p-4 shadow rounded">
            <img src="https://via.placeholder.com/300" alt="Image 6" class="w-full h-48 object-cover rounded">
        </div>
    </div>
</section>

<!-- Footer -->
<footer class="bg-blue-600 text-white mt-8">
    <div class="container mx-auto p-4 text-center">
        <p>&copy; 2024 My Website. All rights reserved.</p>
    </div>
</footer>

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
