<template>
  <div class="max-w-4xl mx-auto flex flex-col gap-4">
    <div class="card bg-base-100 shadow-sm">
      <div class="card-body">
        <h2 class="card-title text-2xl justify-center">Watchlist</h2>

        <div
          tabindex="0"
          class="collapse collapse-arrow bg-base-100 border-base-300 border"
        >
          <div
            class="collapse-title font-semibold after:start-5 after:end-auto pe-4 ps-12"
          >
            Consignes de l'exercice
          </div>
          <div class="collapse-content text-sm">
            <p>Voir la page de leçon correspondante.</p>

            <p>Dans une page :</p>
            <p>- un input pour saisir le nom d'un film ;</p>
            <p>- un bouton qui ajoute ce nom dans un tableau mesFilms.</p>

            <p>Avec v-if, selon la taille du tableau :</p>
            <p>- s'il contient un élément, afficher le nom du film ;</p>
            <p>- s'il est vide, afficher une phrase d'appel à l'action.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="card bg-base-100 shadow-sm">
      <div class="card-body">
        <p>Nom du film :</p>
        <input
          type="text"
          placeholder="Tapez le nom du film..."
          v-model="movieName"
          class="input input-bordered w-full mb-4"
        />
        <button
          class="btn btn-primary mb-4"
          @click="addMovie(movieName.trim())"
        >
          Ajouter à votre liste
        </button>

        <hr class="my-4" />
        <p v-if="movieList.length === 0" class="text-lg font-semibold mb-2">
          Pas encore de films dans votre liste ? Veuillez en ajouter un.
        </p>
        <p v-else class="text-lg font-semibold mb-2">
          Votre liste de films à regarder : {{ movieList.join(", ") }}
        </p>
        <p v-if="isDoublon" class="text-lg font-semibold text-error mb-2">
          Ce film est déjà dans votre liste!
        </p>
      </div>
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
}
</script>
