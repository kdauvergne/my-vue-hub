<template>
  <div class="card bg-base-100 shadow-xl mb-6">
    <div class="card-body">
      <h2 class="card-title text-2xl font-bold mb-4">
        Exercice Dynamic Styling (class)
      </h2>

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
