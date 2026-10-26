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

            <p>Reprendre l'exercice précédent :</p>
            <p>- ajouter des noms de films dans le tableau ;</p>
            <p>
              - garder l'affichage conditionnel selon que le tableau contient
              des éléments ou non ;
            </p>
            <p>- afficher chaque élément du tableau avec v-for.</p>

            <p>Au clic sur un élément, celui-ci est supprimé du tableau.</p>
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
    <details class="font-semibold m-4">
      <summary>Voir la correction</summary>
      <CodeBlock :code="correction" class="font-light text-xs mt-4" />
    </details>
  </div>
</template>

<script setup>
import { ref } from "vue";
import CodeBlock from "../../components/CodeBlock.vue";
import correction from "../corrections/correction-exercice-list-rendering.vue?raw";

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
