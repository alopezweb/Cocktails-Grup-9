<script setup>
import { ref, onMounted } from "vue";
import { db } from "@/firebase"; // Import your Firebase configuration
import { collection, addDoc, updateDoc, doc, deleteDoc, getDocs } from "firebase/firestore";
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
  cocktails.value = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  console.log(cocktails)
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



   console.log("nombre "+cocktailName)
   console.log("ingredientes"+ingredients)
   console.log("recepta:"+recipe)

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
        <h1>Crea tu cóctel</h1>

        <form class="cocktail-form" @submit.prevent="editingCocktailId ? editCocktail() : saveCocktail()">
          <div class="form-group">
            <label for="cocktail-name">Nombre del cocktail</label>
            <input type="text" id="cocktail-name" v-model="cocktailName" placeholder="Escribe aquí el nombre del nuevo cocktail" required/>
          </div>

          <div class="form-group">
            <label for="ingredients">Ingredientes</label>
            <div id="ingredients">
              <IngredientSelector v-model="ingredients" />
            </div>
          </div>

          <div class="form-group">
            <label for="recipe">Receta</label>
            <textarea
              id="recipe"
              v-model="recipe"
              placeholder="Escribe aquí tu receta"
              required
            ></textarea>
          </div>

          <div class="button-container">
            <button type="submit" class="btn save-btn">Guardar</button>
            <button type="button" class="btn delete-btn" @click="deleteCocktail(editingCocktailId)">Eliminar</button>
          </div>
        </form>

        <h2>Lista de Cócteles</h2>
        <ul>
          <li v-for="cocktail in cocktails" :key="cocktail.id">
            <strong>{{ cocktail.name }}</strong>
            <button @click="editingCocktailId = cocktail.id; cocktailName = cocktail.name; ingredients = cocktail.ingredients; recipe = cocktail.recipe">Editar</button>
            <button @click="deleteCocktail(cocktail.id)">Eliminar</button>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 600px;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
}

.cocktail-form {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

label {
  font-weight: bold;
  margin-bottom: 5px;
}

input,
textarea {
  padding: 10px;
  border: 1px solid #ccc;
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
  justify-content: space-between;
  gap: 10px;
}

button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:active {
  transform: scale(0.98);
}

.save-btn {
  background-color: #4caf50;
  color: white;
}

.save-btn:hover {
  background-color: #45a049;
}

.edit-btn {
  background-color: #ffa500;
  color: white;
}

.edit-btn:hover {
  background-color: #e69500;
}

.delete-btn {
  background-color: #f44336;
  color: white;
}

.delete-btn:hover {
  background-color: #e53935;
}
</style>
