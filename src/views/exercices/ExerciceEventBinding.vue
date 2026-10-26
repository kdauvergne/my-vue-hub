<template>
  <div class="max-w-4xl mx-auto flex flex-col gap-4">
    <div class="card bg-base-100 shadow-sm">
      <div class="card-body">
        <h2 class="card-title text-2xl justify-center">
          Exercice Event Binding
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
            <p>Créer un composant compteur qu’on peut augmenter et réduire :</p>
            <p>- augmenter de 1000 en 1000 ;</p>
            <p>- réduire de 77 en 77.</p>
            <p>
              Bonus : utiliser les modificateurs d’événements pour que
              l’augmentation réagisse au clic gauche et la réduction au clic
              droit.
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
import correction from "../corrections/correction-exercice-event-binding.vue?raw";

const counter = ref(0);

function increment() {
  counter.value += 1000;
}

function decrement() {
  counter.value -= 77;
}
</script>
