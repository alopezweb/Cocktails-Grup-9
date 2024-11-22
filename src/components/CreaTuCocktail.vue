<script setup>
import { ref, onMounted } from "vue";
import { db } from "@/firebase"; // Import your Firebase configuration
import {
  collection,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
  getDocs,
} from "firebase/firestore";
//import Header from "@/components/Header.vue";
//import Nav from "@/components/Nav.vue";
import IngredientSelector from "@/components/IngredientsSelector.vue";

// State variables
const cocktailName = ref("");
const ingredients = ref([]);
//const ingredients= ref([{code:'ing02-ron',name:'Ron'}]);
const recipe = ref("");
const cocktails = ref([]);
const editingCocktailId = ref(null);

// Fetch cocktails from Firestore
const fetchCocktails = async () => {
  const querySnapshot = await getDocs(collection(db, "cocktails"));
  cocktails.value = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  console.log(cocktails);
};

// Guardar nou cocktail
const saveCocktail = async () => {
  if (cocktailName.value && ingredients.value.length > 0 && recipe.value) {
    await addDoc(collection(db, "cocktails"), {
      name: cocktailName.value,
      ingredients: ingredients.value,
      recipe: recipe.value,
    });
    resetForm();
    fetchCocktails();
  } else {
    console.log("nombre " + cocktailName);
    console.log("ingredientes" + ingredients);
    console.log("recepta:" + recipe);

    alert("RELLENA TODOS LOS CAMPOS.");
  }
};

// Edit an existing cocktail
const editCocktail = async () => {
  if (editingCocktailId.value) {
    await updateDoc(doc(db, "cocktails", editingCocktailId.value), {
      name: cocktailName.value,
      ingredients: ingredients.value,
      recipe: recipe.value,
    });
    resetForm();
    fetchCocktails();
    editingCocktailId.value = null; // Reset editing ID
  }
};

// Borrar cocktail
const deleteCocktail = async (id) => {
  await deleteDoc(doc(db, "cocktails", id));
  fetchCocktails();
};

// Resetejar Formulari
const resetForm = () => {
  cocktailName.value = "";
  ingredients.value = [];
  recipe.value = "";
};

// On mounted, fetch cocktails
onMounted(fetchCocktails);
</script>

<template>
  <div>
    <main>
      <div class="form-container">
        <h1>Create your cocktail</h1>
        <form
          class="cocktail-form"
          @submit.prevent="editingCocktailId ? editCocktail() : saveCocktail()"
        >
          <div class="form-group">
            <label for="cocktail-name">Cocktail name</label>
            <input
              type="text"
              id="cocktail-name"
              v-model="cocktailName"
              placeholder="Write the name of the new cocktail here"
              required
            />
          </div>

          <div class="form-group">
            <label for="ingredients">Ingredients</label>
            <div id="ingredients">
              <IngredientSelector v-model="ingredients" />
            </div>
          </div>

          <div class="form-group">
            <label for="recipe">Recipe</label>
            <textarea
              id="recipe"
              v-model="recipe"
              placeholder="Write your recipe here"
              required
            ></textarea>
          </div>
          
          <div class="button-container">
            <button type="button" class="button secondary-button text-white font-medium py-2 px-5 rounded-full transition" @click="deleteCocktail(editingCocktailId)">Delete</button>
            <button type="submit" class="button text-white font-medium py-2 px-5 rounded-full transition">Save</button>          
          </div>
        </form>
        <h2 class="cocktails-list-heading">Cocktails List</h2>
        <ul class="cocktails-list" >
          <li v-for="cocktail in cocktails" :key="cocktail.id">
            <strong>{{ cocktail.name }}</strong>
            <div>
            <button class="button secondary-button text-white font-medium py-2 px-5 rounded-full transition" @click="deleteCocktail(cocktail.id)">Delete</button>
            <button class="button text-white font-medium py-2 px-5 rounded-full transition" @click="editingCocktailId = cocktail.id; cocktailName = cocktail.name; ingredients = cocktail.ingredients; recipe = cocktail.recipe">Edit</button>
            </div>
          </li>
        </ul>
      </div>
    </main>
  </div>
</template>

<style scoped>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

.form-container {
  margin: auto;
  width: 100%;
  max-width: 600px;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h1 {
  font-size: 24px;
  margin-bottom: 20px;
  font-family: "Playfair Display", serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
  font-size: 1.875rem;
  line-height: 2.25rem;
}

.cocktail-form {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.cocktail-form + h2{
  margin-top: 32px;
  font-family: "Playfair Display", serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
}
.form-group {
  display: flex;
  flex-direction: column;
}
.cocktails-list{  
  width: 100%;
}
.cocktails-list-heading{
  font-size: 1.875rem;
}
.cocktails-list li{
  margin-top: 16px;
  border-bottom: 1px solid #dcd6d2;
  padding-bottom: 16px;
}
.cocktails-list li:first-child{
  border-top: 1px solid #dcd6d2;
  padding-top: 16px;
}
.cocktails-list li:last-child{
  border-bottom: 0;
}
.cocktails-list li div{
  display: flex;
  justify-content: flex-end;
  gap: 16px;
}
label {
  font-weight: bold;
  margin-bottom: 5px;
}

input,
textarea {
  padding: 10px;
  border: 1px solid #dcd6d2;
  border-radius: 5px;
  margin-top: 5px;
  font-size: 16px;
}

textarea {
  resize: vertical;
  min-height: 120px;
}

.button-container {
  display: flex;
  justify-content: flex-end;
  gap: 16px;
}
input::placeholder, textarea::placeholder,
.multiselect__placeholder{
  color: #adadad;
  font-size: 14px;
}
</style>
