<script setup>
import IngredientSelector from "@/components/IngredientsSelector.vue";
</script>

<template>
  <div>
    <main>
      <div class="form-container">
        <h1>Crea tu cóctel</h1>

        <form class="cocktail-form">
          <div class="form-group">
            <label for="cocktail-name">Nombre del cocktail</label>
            <input
              type="text"
              id="cocktail-name"
              placeholder="Escribe aquí el nombre del nuevo cocktail"
            />
          </div>

          <div class="form-group">
            <label for="ingredients">Ingredientes</label>
            <div id="ingredients">
              <IngredientSelector />
            </div>
          </div>

          <div class="form-group">
            <label for="recipe">Receta</label>
            <textarea
              id="recipe"
              placeholder="Escribe aquí tu receta"
            ></textarea>
          </div>

          <div class="button-container">
            <button type="button" class="btn save-btn">Guardar</button>
            <button type="button" class="btn edit-btn">Editar</button>
            <button type="button" class="btn delete-btn">Eliminar</button>
          </div>
        </form>
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
