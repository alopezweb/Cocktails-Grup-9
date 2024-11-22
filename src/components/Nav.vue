<script>
</script>

<template>
<nav class="nav">
    <div class="container mx-auto p-4">
        <ul class="flex space-x-4">
            <li>
                <RouterLink to="/lista-de-cocktails">Home</RouterLink>            
            </li>
            <li>
                <RouterLink to="/crea-tu-cocktail">Create your Cocktail</RouterLink>
            </li>
        </ul>
    </div>
</nav>
</template>

<style scoped>
.nav{
    color: #b9aea6;
    border-top: #362F2A solid 1px;
    border-bottom: #362F2A solid 1px;
}
.nav a:hover{
    color: #fff;
}
</style>
