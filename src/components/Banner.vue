<script>
</script>

<template>
<div class="banner bg-gray-300 h-64 flex items-center justify-center">
    <img src="https://img.freepik.com/premium-photo/alcoholic-cocktail-cool-alcoholic-drink-colored-background-generative-ai_629315-10662.jpg" alt="">
    <h2 class="text-4xl font-bold">Cocktail del día</h2>
</div>
</template>

<style scoped>
.banner{
    display: block;
border: 2px dotted #0ff !important;
overflow: hidden;
position: relative;
    img{
        position: absolute;
        z-index: 0;
        opacity: .9;
    }
    h2{
        
        position: relative;
  top: 30px;
  left: 30px;
    }
}
</style>
