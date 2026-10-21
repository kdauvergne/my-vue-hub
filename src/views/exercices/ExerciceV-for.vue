<template>
  <div class="card bg-base-100 shadow-sm max-w-4xl mx-auto my-8">
    <div class="card-body">
      <h2 class="card-title text-2xl font-bold mb-4 justify-center">
        Watchlist
      </h2>

      <p>Nom du film :</p>
      <input
        type="text"
        placeholder="Tapez le nom du film..."
        v-model="movieName"
        class="input input-bordered w-full mb-4"
      />
      <button class="btn btn-primary mb-4" @click="addMovie(movieName.trim())">
        Ajouter à votre liste
      </button>

      <hr class="my-4" />
      <p v-if="movieList.length === 0" class="text-lg font-semibold mb-2">
        Pas encore de films dans votre liste ? Veuillez en ajouter un.
      </p>
      <p v-else class="text-lg font-semibold mb-2">
        Votre liste de films à regarder :
      </p>
      <ul class="list-disc pl-6">
        <li
          v-for="(movie, index) in movieList"
          :key="index"
          class="mb-1 list-none"
        >
          <button class="btn w-fit" @click="movieList.splice(index, 1)">
            {{ index + 1 }} - {{ movie }} - 🗑️
          </button>
        </li>
      </ul>
      <p v-if="isDoublon" class="text-lg font-semibold text-error mb-2">
        Ce film est déjà dans votre liste!
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const movieName = ref("");
const movieList = ref([]);

const isDoublon = ref(false);

function addMovie(movie) {
  movie = movie.trim().toLowerCase();
  if (movie === "") {
    alert("Veuillez entrer un nom de film valide.");
    return;
  } else if (movieList.value.includes(movie)) {
    isDoublon.value = true;
    return;
  }
  movieList.value.push(movie);
  movieName.value = "";
}
</script>
