<template>
  <div class="card bg-base-100 shadow-sm max-w-4xl mx-auto my-8">
    <div class="card-body">
      <h2 class="card-title text-2xl font-bold mb-4">
        Exercice Dynamic Styling (class)
      </h2>
      <div class="card-actions justify-center mt-4">
        <button v-on:click="increment" class="btn btn-circle btn-success mb-3">
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
        fonction afficherUsername() : {{ username }} {{ afficherUsername() }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const counter = ref(0);

const username = ref("");

function afficherUsername() {
  console.log("La fonction qui gère le username est appelée");
  if (username.value === "") {
    return "Online";
  } else {
    return "Offline";
  }
}

function increment() {
  counter.value += 1000;
}

function decrement() {
  counter.value -= 77;
}
</script>
