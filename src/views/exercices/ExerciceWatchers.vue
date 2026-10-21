<template>
  <div class="card bg-base-100 shadow-sm max-w-4xl mx-auto my-8">
    <div class="card-body">
      <span class="badge badge-xs badge-warning">Exercice</span>
      <div class="flex justify-between">
        <h2 class="text-3xl font-bold">Compteur avec Watchers</h2>
      </div>

      <div class="mt-6 flex items-center justify-center">
        <button class="btn btn-primary" @click="leNombre++">+</button>
        <span class="mx-4 text-2xl font-bold"
          >Valeur actuelle : {{ leNombre }}</span
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const leNombre = ref(0);

watch(leNombre, (newValue) => {
  console.log(`Ça surveille`);
  if (newValue === 7) {
    console.log("Limite atteinte !");
    leNombre.value = 0;
  }
});
</script>
