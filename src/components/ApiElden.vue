<template>
  <div>
    <img
      :src="image"
      :alt="name"
      class="max-w-64 max-h-64 object-contain rounded-box"
    />
    <p class="text-center mt-2">{{ name }}</p>
  </div>
</template>

<script setup>
// Version props

const props = defineProps({
  image: String,
  name: String,
});

// Version V1 sans props

// import { ref, onMounted } from "vue";

// const npcs = ref([]);

// onMounted(async () => {
//   try {
//     const response = await fetch("https://eldenring.fanapis.com/api/npcs");

//     if (!response.ok) {
//       throw new Error(`Erreur HTTP ${response.status}`);
//     }

//     const data = await response.json();
//     console.log(data);

//     npcs.value = data.data;

//     console.log(npcs.value);
//   } catch (e) {
//     console.error(e);
//   }
// });
</script>
