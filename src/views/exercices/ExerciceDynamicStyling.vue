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
              Créer un composant qui affiche quatre cartes. Le changement de
              style se déclenche au clic.
            </p>
            <p>
              Cartes 1 et 2 : utiliser la liaison de style pour appliquer un
              nouveau style au clic.
            </p>
            <p>
              Cartes 3 et 4 : utiliser la liaison de classe pour appliquer une
              classe CSS au clic.
            </p>

            <p>
              Bonus : au second clic, les cartes reviennent à leur style de base
              (cartes 1 et 2) ou perdent leur classe (cartes 3 et 4).
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="card bg-base-100 shadow-sm">
      <div class="card-body">
        <div class="grid grid-cols-2 gap-4">
          <button
            type="button"
            class="card w-full cursor-pointer hover:shadow-md transition focus-visible:outline-2 focus-visible:outline-primary"
            @click="selectionCard(1)"
            :style="{ backgroundColor: selectCard1 ? 'pink' : 'lightblue' }"
          >
            <span class="card-body items-center justify-center p-6">
              <span class="text-xl font-semibold">Carte 1 via style</span>
            </span>
          </button>
          <button
            type="button"
            class="card w-full cursor-pointer hover:shadow-md transition focus-visible:outline-2 focus-visible:outline-primary"
            @click="selectionCard(2)"
            v-bind:style="{
              backgroundColor: selectCard2 ? 'lightcoral' : 'lightskyblue',
            }"
          >
            <span class="card-body items-center justify-center p-6">
              <span class="text-xl font-semibold">Carte 2 via style</span>
            </span>
          </button>
          <button
            type="button"
            class="card w-full cursor-pointer hover:shadow-md transition focus-visible:outline-2 focus-visible:outline-primary border-2 border-base-300"
            @click="selectionCard(3)"
            :class="{ class1: selectCard3 }"
          >
            <!-- avec classe css définie dans le style scoped -->
            <span class="card-body items-center justify-center p-6">
              <span class="text-xl font-semibold">Carte 3 via class</span>
            </span>
          </button>
          <button
            type="button"
            class="card w-full cursor-pointer hover:shadow-md transition focus-visible:outline-2 focus-visible:outline-primary border-2 border-base-300"
            @click="selectionCard(4)"
            v-bind:class="{ 'bg-green-200': selectCard4 }"
          >
            <!-- avec classe tailwind css directement dans le v-bind:class -->
            <span class="card-body items-center justify-center p-6">
              <span class="text-xl font-semibold">Carte 4 via class</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const selectCard1 = ref(false);
const selectCard2 = ref(false);
const selectCard3 = ref(false);
const selectCard4 = ref(false);

function selectionCard(card) {
  if (card === 1) {
    selectCard1.value = !selectCard1.value;
  } else if (card === 2) {
    selectCard2.value = !selectCard2.value;
  } else if (card === 3) {
    selectCard3.value = !selectCard3.value;
  } else if (card === 4) {
    selectCard4.value = !selectCard4.value;
  }
}
</script>

<style scoped>
.class1 {
  background-color: lightblue;
}

.class2 {
  background-color: lightgreen;
}
</style>
