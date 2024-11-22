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
    font-size: 14px;
    text-transform: uppercase;
    color: #c2b8b1;
    border-top: #362F2A solid 1px;
    border-bottom: #362F2A solid 1px;
}
.nav a:hover{
    color: #fff;
}
</style>
