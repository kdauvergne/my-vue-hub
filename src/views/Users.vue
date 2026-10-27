<script lang="js" setup>
import { ref } from "vue";

const users = ref([
  { id: 1, name: "Steven Vandamme" },
  { id: 2, name: "Jean-Claude Seagal" },
  { id: 3, name: "Chuck Lee" },
  { id: 4, name: "Bruce Norris" },
]);
</script>

<template>
  <div class="max-w-5xl mx-auto p-6">
    <h1 class="text-3xl font-bold mb-6">Exemple de route dynamique</h1>

    <div class="flex flex-col gap-4">
      <div
        v-for="user in users"
        :key="user.id"
        class="card bg-base-100 shadow-md w-full"
      >
        <div class="card-body flex-row items-center justify-between">
          <h2 class="card-title">{{ user.name }}</h2>
          <!-- <RouterLink
            :to="`/details/${user.id}/${user.name.replace(' ', '-')}`"
            class="btn btn-accent"
            >Voir les détails</RouterLink
          > -->
          <router-link
            :to="{ name: 'Details', params: { id: user.id, name: user.name } }"
            class="btn btn-accent"
            >Voir les détails</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
