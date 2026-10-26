<template>
  <div class="badge badge-primary">{{ film }}</div>
</template>

<script setup>
const props = defineProps({
  film: String,
});

// const films = ref([]);

// onMounted(async () => {
//   try {
//     const response = await fetch("https://ghibliapi.vercel.app/films");

//     if (!response.ok) {
//       throw new Error(`Erreur HTTP ${response.status}`);
//     }

//     const data = await response.json();
//     console.log(data);
//     console.log(data[0]);
//     console.log(data[0].title);

//     data.forEach((film) => {
//       console.log(film.title);
//       films.value.push(film.title);
//     });

//     console.log(films.value);
//   } catch (e) {
//     console.error(e);
//   }
// });
</script>
