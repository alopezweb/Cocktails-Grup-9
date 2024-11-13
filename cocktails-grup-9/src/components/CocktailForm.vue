
import Multiselect from 'vue-multiselect'
<template>
    <div class="cocktail-form">
      <h2>Agregar nou Cocktail</h2>
      <form @submit.prevent="submitForm">
        <div>
          <label for="title">Título:</label>
          <input type="text" v-model="cocktail.title" id="title" required />
        </div>
        <div>
          <label for="ingredients">Ingredientes:</label>
          <textarea v-model="cocktail.ingredients" id="ingredients" required></textarea>
        </div>
        <div>
          <label for="preparation">Preparación:</label>
          <textarea v-model="cocktail.preparation" id="preparation" required></textarea>
        </div>
        <div><label class="typo__label">Simple select / dropdown</label>
    <multiselect v-model="value" :options="options" :multiple="true" :close-on-select="false" :clear-on-select="false"
                 :preserve-search="true" placeholder="Pick some" label="name" track-by="name" :preselect-first="true">
      <template #selection="{ values, search, isOpen }">
        <span class="multiselect__single"
              v-if="values.length"
              v-show="!isOpen">{{ values.length }} options selected</span>
      </template>
    </multiselect>
    <pre class="language-json"><code>{{ value }}</code></pre>
  </div>

        <div>
          <label for="photo">Subir Foto:</label>
          <input type="file" @change="handleFileUpload" id="photo" accept="image/*" />
        </div>
        <button type="submit">Guardar Cóctel</button>
      </form>
      <div v-if="submitted">
        <h3>Cóctel Agregado:</h3>
        <p><strong>Título:</strong> {{ cocktail.title }}</p>
        <p><strong>Ingredientes:</strong> {{ cocktail.ingredients }}</p>
       
        <div><label class="typo__label">Tagging</label>
         <multiselect v-model="value" tag-placeholder="Add this as new tag" placeholder="Search or add a tag" label="name"
                 track-by="code" :options="options" :multiple="true" :taggable="true" @tag="addTag"></multiselect>
            <pre class="language-json"><code>{{ value }}</code></pre>
        </div>

        <p><strong>Preparación:</strong> {{ cocktail.preparation }}</p>
        <img v-if="cocktail.photo" :src="cocktail.photo" alt="Cocktail Photo" width="200" />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        cocktail: {
          title: '',
          ingredients: '',
          preparation: '',
          photo: null,
        },
        submitted: false,
        
      };
    },
    methods: {
      handleFileUpload(event) {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (e) => {
            this.cocktail.photo = e.target.result; // Guardamos la imagen como URL
          };
          reader.readAsDataURL(file);
        }
      },
      submitForm() {
        // Aquí podrías manejar el envío de datos a un servidor o realizar alguna acción
        this.submitted = true;
        console.log('Cocktail Data:', this.cocktail);
      },
    },
  
  };
  </script>
  
  <style scoped>
  .cocktail-form {
    max-width: 400px;
    margin: auto;
  }
  form div {
    margin-bottom: 15px;
  }
  </style>