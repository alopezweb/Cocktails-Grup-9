<script setup>
import { ref, onMounted, watch } from "vue";
import Multiselect from "vue-multiselect";
import "vue-multiselect/dist/vue-multiselect.min.css";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../firebase";

const props = defineProps({
  modelValue: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(["update:modelValue"]);

const selectedIngredients = ref([...props.modelValue]);
const predefinedIngredients = ref([]);

const loadIngredients = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "ingredients"));
    predefinedIngredients.value = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error("Error al cargar ingredientes:", error);
  }
};

const addTag = async (newTag) => {
  const tag = {
    name: newTag,
    code:
      newTag.substring(0, 3).toLowerCase() +
      Math.floor(Math.random() * 10000000),
  };

  try {
    const docRef = await addDoc(collection(db, "ingredients"), tag);
    predefinedIngredients.value.push({ id: docRef.id, ...tag });
    selectedIngredients.value.push(tag);
    emit("update:modelValue", selectedIngredients.value);
  } catch (error) {
    console.error("Error al guardar el nuevo ingrediente:", error);
  }
};

watch(selectedIngredients, (newValue) => {
  emit("update:modelValue", newValue);
});

watch(
  () => props.modelValue,
  (newValue) => {
    selectedIngredients.value = [...newValue];
  }
);

onMounted(loadIngredients);
</script>

<template>
  <div>
    <h2>Select or add ingredients</h2>
    <Multiselect
      v-model="selectedIngredients"
      :options="predefinedIngredients"
      :multiple="true"
      :taggable="true"
      :tag-placeholder="'Add ingredient...'"
      @tag="addTag"
      placeholder="Type your ingredient here or select it from the list"
      label="name"
      track-by="code"
    />
  </div>
</template>

<style scoped></style>
