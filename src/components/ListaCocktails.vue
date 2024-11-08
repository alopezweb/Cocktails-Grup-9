<script>
export default {
  data() {
    return {
      cocktails: [
    { 
        id: 1, 
        name: 'Mojito', 
        ingredients: ['Ron', 'Azúcar', 'Lima', 'Menta', 'Agua con gas'], 
        imagen: 'https://mandolina.co/wp-content/uploads/2023/07/daiquiri-frambuesa-1200x900.jpg' 
    },
    { 
        id: 2, 
        name: 'Piña Colada', 
        ingredients: ['Ron', 'Crema de coco', 'Jugo de piña'], 
        imagen: 'https://mandolina.co/wp-content/uploads/2023/07/daiquiri-frambuesa-1200x900.jpg' 
    },
    { 
        id: 3, 
        name: 'Daiquiri', 
        ingredients: ['Ron', 'Azúcar', 'Lima'], 
        imagen: 'https://mandolina.co/wp-content/uploads/2023/07/daiquiri-frambuesa-1200x900.jpg' 
    },
    { 
        id: 4, 
        name: 'Margarita', 
        ingredients: ['Tequila', 'Licor de naranja', 'Lima'], 
        imagen: 'https://mandolina.co/wp-content/uploads/2023/07/daiquiri-frambuesa-1200x900.jpg' 
    },
    { 
        id: 5, 
        name: 'Mojito', 
        ingredients: ['Ron', 'Azúcar', 'Lima', 'Menta', 'Agua con gas'], 
        imagen: 'https://mandolina.co/wp-content/uploads/2023/07/daiquiri-frambuesa-1200x900.jpg' 
    },
    { 
        id: 6, 
        name: 'Piña Colada', 
        ingredients: ['Ron', 'Crema de coco', 'Jugo de piña'], 
        imagen: 'https://bartendercocktail.es/wp-content/uploads/2021/09/pina-colada-coctel-receta.jpg' 
    },
    { 
        id: 7, 
        name: 'Daiquiri', 
        ingredients: ['Ron', 'Azúcar', 'Lima'], 
        imagen: 'https://mandolina.co/wp-content/uploads/2023/07/daiquiri-frambuesa-1200x900.jpg' 
    },
    { 
        id: 8, 
        name: 'Margarita', 
        ingredients: ['Tequila', 'Licor de naranja', 'Lima'], 
        imagen: 'https://mandolina.co/wp-content/uploads/2023/07/daiquiri-frambuesa-1200x900.jpg' 
    }
    ]
    };

  }
};

</script>

<template>
    <div class="cocktail-grid">
      <div class="cocktail-card" v-for="cocktail in cocktails" :key="cocktail.id">
        <img :src="cocktail.imagen" alt="cocktail.name" class="cocktail-image" />
        <h3>{{ cocktail.name }}</h3>
        <p>Ingredients: {{ cocktail.ingredients.join(', ') }}</p>
      </div>
    </div>
</template>

<style scoped>
  .cocktail-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px; 
}

.cocktail-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  width: 500px;
  padding: 16px;
  margin: 16px 0;
  background-color: #f9f9f9;
  text-align: center;
  transition: box-shadow 0.3s;
}

.cocktail-card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.cocktail-image {
  width: 25%;
  height: 25%;
  border-radius: 4px;
  margin-bottom: 8px;
  
}
</style>
