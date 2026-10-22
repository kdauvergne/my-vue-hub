<template>
  <div class="card bg-base-200">
    <div class="card-body">
      <h3 class="card-title">Les films du Studio Ghibli :</h3>
      <ul class="flex flex-wrap gap-2">
        <li
          v-for="(film, index) in films"
          :key="index"
          class="badge badge-primary"
        >
          {{ film }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const films = ref([]);

onMounted(async () => {
  try {
    const response = await fetch("https://ghibliapi.vercel.app/films");

    if (!response.ok) {
      throw new Error(`Erreur HTTP ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
    console.log(data[0]);
    console.log(data[0].title);

    data.forEach((film) => {
      console.log(film.title);
      films.value.push(film.title);
    });

    console.log(films.value);
  } catch (e) {
    console.error(e);
  }
});
</script>
