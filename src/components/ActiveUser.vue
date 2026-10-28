<script lang="js" setup>
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
});
</script>

<template>
  <div>
    <div class="card-body">
      <h2 class="card-title text-xl justify-center text-center">
        Composant affichage des données utilisateur
      </h2>
      <div class="m-4">
        <p class="text-xl font-bold text-center">{{ name }}</p>
        <p class="text-xl font-medium text-center">
          {{ age === 0 ? "" : age }}
        </p>
      </div>

      <div>
        <h3 class="text-m text-center justify-center">ActiveUser</h3>
      </div>
    </div>
  </div>
</template>
