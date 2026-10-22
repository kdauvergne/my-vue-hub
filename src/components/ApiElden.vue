<template>
  <div class="card bg-base-200">
    <div class="card-body items-center text-center">
      <h3 class="card-title">Le cercle d'Elden :</h3>

      <ul class="grid grid-cols-2 gap-4">
        <li
          v-for="npc in npcs"
          :key="npc.name"
          class="flex flex-col items-center gap-2"
        >
          <img
            :src="npc.image"
            :alt="npc.name"
            class="max-w-64 max-h-64 object-contain rounded-box"
          />
          {{ npc.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const npcs = ref([]);

onMounted(async () => {
  try {
    const response = await fetch("https://eldenring.fanapis.com/api/npcs");

    if (!response.ok) {
      throw new Error(`Erreur HTTP ${response.status}`);
    }

    const data = await response.json();
    console.log(data);

    npcs.value = data.data;

    console.log(npcs.value);
  } catch (e) {
    console.error(e);
  }
});
</script>
