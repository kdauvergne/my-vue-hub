<template>
  <div class="card bg-base-100 shadow-sm max-w-4xl mx-auto">
    <div class="card-body">
      <h2 class="card-title">Exercice Attribute Binding</h2>

      <div class="grid grid-rows-1 md:grid-rows-2 gap-4">
        <div class="card bg-base-200">
          <div class="card-body">
            <h3 class="card-title">Lien dynamique</h3>
            <p>Contenu</p>
          </div>
        </div>

        <div class="card bg-base-200">
          <div class="card-body">
            <h3 class="card-title">Liaison d'image</h3>
            <p>Contenu</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
</script>
