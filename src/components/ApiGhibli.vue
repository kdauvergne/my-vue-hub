<template>
  <div class="card bg-base-200">
    <div class="card-body">
      <h3 class="card-title">Les films du Studio Ghibli :</h3>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const films = ref([]);
const loading = ref(false);

onMounted(async () => {
  try {
    const response = await fetch("https://ghibliapi.vercel.app/films");
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
  } finally {
    loading.value = false;
  }
});
</script>

<style lang="scss" scoped></style>
