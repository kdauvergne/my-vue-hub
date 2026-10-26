<template>
  <div class="max-w-4xl mx-auto flex flex-col gap-4">
    <div class="card bg-base-100 shadow-sm">
      <div class="card-body">
        <h2 class="card-title text-2xl justify-center">
          Exercice Dynamic Styling (class)
        </h2>

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
            <p>
              Comparer une fonction classique et une propriété computed pour
              comprendre quand chacune est réexécutée.
            </p>

            <p>Reprendre le compteur de l'exercice Event Binding :</p>
            <p>- un bouton + qui ajoute 1000, un bouton - qui retire 77 ;</p>
            <p>
              - un bouton qui augmente au clic gauche et réduit au clic droit.
            </p>

            <p>Ajouter une variable réactive username, puis :</p>
            <p>
              - une fonction afficherUsername qui retourne « Online » si
              username est vide, « Offline » sinon ;
            </p>
            <p>- une computed qui fait la même chose ;</p>
            <p>- un console.log dans chacune des deux.</p>

            <p>
              Cliquer sur le compteur et observer la console : la fonction est
              rappelée à chaque rendu, la computed seulement quand username
              change.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="card bg-base-100 shadow-sm">
      <div class="card-body">
        <div class="card-actions justify-center mt-4">
          <button
            v-on:click="increment"
            class="btn btn-circle btn-success mb-3"
          >
            +
          </button>
          <button v-on:click="decrement" class="btn btn-circle btn-error mb-3">
            -
          </button>
        </div>
        <p class="text-xl text-center">Compteur : {{ counter }}</p>

        <div class="card-actions justify-center mt-4 flex-col items-center">
          <p class="text-xl text-center">Clic gauche ou clic droit ?</p>
          <button
            v-on:click.right.prevent="decrement"
            v-on:click.left="increment"
            class="btn btn-circle btn-active mb-3"
          >
            ?
          </button>
        </div>

        <p class="text-xl text-center mt-4">
          fonction afficherUsername() : {{ username }} {{ usernameComputed }}
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
import { ref, computed } from "vue";
import CodeBlock from "../../components/CodeBlock.vue";
import correction from "../corrections/correction-exercice-computed-properties.vue?raw";

const counter = ref(0);

const username = ref("");

// Sans computed la fonction sera appelée à chaque rendu du composant.

function afficherUsername() {
  console.log("La fonction qui gère le username est appelée");
  if (username.value === "") {
    return "Online";
  } else {
    return "Offline";
  }
}

// Avec computed la fonction ne sera appelée que si la valeur de username change.
const usernameComputed = computed(() => {
  console.log("La fonction qui gère le username est appelée");
  return username.value === "" ? "Online" : "Offline";
});

function increment() {
  counter.value += 1000;
}

function decrement() {
  counter.value -= 77;
}
</script>
