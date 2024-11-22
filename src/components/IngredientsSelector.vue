<script setup>
import { ref, onMounted, watch } from "vue";
import Multiselect from "vue-multiselect";
import "vue-multiselect/dist/vue-multiselect.min.css";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../firebase";

// Define props for v-model
const props = defineProps({
  modelValue: {
    type: Array,
    required: true,
  },
});

// Define emits to update v-model
const emit = defineEmits(["update:modelValue"]);

// Ingredientes seleccionados por el usuario
const selectedIngredients = ref(props.modelValue);
console.log(selectedIngredients);
// Ingredientes predefinidos (cargados desde Firestore)
const predefinedIngredients = ref([]);

// Función para cargar ingredientes desde Firestore
const loadIngredients = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "ingredients"));
    predefinedIngredients.value = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    console.log(
      "Ingredientes cargados desde Firestore:",
      predefinedIngredients.value
    );
  } catch (error) {
    console.error("Error al cargar ingredientes:", error);
  }
};

// Función para manejar la adición de nuevos ingredientes
const addTag = async (newTag) => {
  const tag = {
    name: newTag,
    code:
      newTag.substring(0, 3).toLowerCase() +
      Math.floor(Math.random() * 10000000),
  };

  try {
    // Guarda el nuevo ingrediente en Firestore
    const docRef = await addDoc(collection(db, "ingredients"), tag);
    console.log("Ingrediente guardado en Firestore:", tag);

    // Actualiza la lista de ingredientes predefinidos cargados desde Firestore
    predefinedIngredients.value.push({ id: docRef.id, ...tag });
    
    // Update selected ingredients and emit the change
    selectedIngredients.value.push(tag);
    emit("update:modelValue", selectedIngredients.value);
  } catch (error) {
    console.error("Error al guardar el nuevo ingrediente:", error);
  }
};

// Watch for changes in selectedIngredients to emit updates
watch(selectedIngredients, (newValue) => {
  emit("update:modelValue", newValue);
});

// Cargar ingredientes al montar el componente
onMounted(() => {
  loadIngredients();
});
</script>

<template>
  <div>
    <!-- Componente de selección múltiple de ingredientes con taggable -->
    <Multiselect
      v-model="selectedIngredients"
      :options="predefinedIngredients"
      :multiple="true"
      :taggable="true"
      :tag-placeholder="'Añadir ingrediente...'"
      @tag="addTag"
      placeholder="Escribe aquí tu ingrediente o selecciónalo en la lista"
      label="name"
      track-by="code"
    />
  </div>
</template>

<style scoped></style>