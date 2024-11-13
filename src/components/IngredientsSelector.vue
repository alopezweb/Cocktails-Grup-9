<script setup>
import { ref } from "vue";
import Multiselect from "vue-multiselect";
import "vue-multiselect/dist/vue-multiselect.min.css";

// Ingredientes seleccionados por el usuario
const selectedIngredients = ref([]);

// Ingredientes predefinidos
const predefinedIngredients = ref([
  { name: "Vodka", code: "vod" },
  { name: "Ron", code: "ron" },
  { name: "Tequila", code: "teq" },
  { name: "Ginebra", code: "gin" },
  { name: "Cointreau", code: "coin" },
  { name: "Menta", code: "ment" },
  { name: "Limón", code: "lim" },
  { name: "Naranja", code: "nar" },
  { name: "Hielo", code: "hie" },
  { name: "Jugo de limón", code: "jl" },
  { name: "Jugo de piña", code: "jp" },
  { name: "Azúcar", code: "az" },
]);

// Función para manejar la adición de nuevos ingredientes
const addTag = (newTag) => {
  const tag = {
    name: newTag,
    code:
      newTag.substring(0, 3).toLowerCase() +
      Math.floor(Math.random() * 10000000),
  };
  predefinedIngredients.value.push(tag); // Agrega el nuevo ingrediente a la lista de opciones
  selectedIngredients.value.push(tag); // Agrega el ingrediente seleccionado
};
</script>

<template>
  <div>
    <h2>Selecciona o añade ingredientes</h2>

    <!-- Componente de selección múltiple de ingredientes con taggable -->
    <Multiselect
      v-model="selectedIngredients"
      :options="predefinedIngredients"
      :multiple="true"
      :taggable="true"
      :tag-placeholder="'Añadir ingrediente...'"
      @tag="addTag"
      placeholder="Selecciona o añade ingredientes"
      label="name"
      track-by="code"
    />
  </div>
</template>

<style scoped></style>
