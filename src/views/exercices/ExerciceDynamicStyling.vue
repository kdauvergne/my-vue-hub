<template>
  <div class="card bg-base-100 shadow-xl mb-6">
    <div class="card-body">
      <h2 class="card-title text-2xl font-bold mb-4">
        Exercice Dynamic Styling (class)
      </h2>

      <div class="grid grid-cols-2 gap-4">
        <button
          type="button"
          class="card w-full bg-blue-400 cursor-pointer hover:shadow-md transition focus-visible:outline-2 focus-visible:outline-primary"
          :style="{ backgroundColor: dynamicColor }"
          @click="changeColor"
        >
          <span class="card-body items-center justify-center p-6">
            <span class="text-xl font-semibold">Carte 1 via style</span>
          </span>
        </button>
        <button
          type="button"
          class="card w-full bg-fuchsia-400 cursor-pointer hover:shadow-md transition focus-visible:outline-2 focus-visible:outline-primary"
          :style="{ backgroundColor: dynamicColor2 }"
          @click="changeColor2"
        >
          <span class="card-body items-center justify-center p-6">
            <span class="text-xl font-semibold">Carte 2 via style</span>
          </span>
        </button>
        <button
          type="button"
          class="card w-full cursor-pointer hover:shadow-md transition focus-visible:outline-2 focus-visible:outline-primary border-2 border-base-300"
          :class="{ 'bg-green-400': isActive }"
          @click="toggleStatus"
        >
          <span class="card-body items-center justify-center p-6">
            <span class="text-xl font-semibold">Carte 3 via class</span>
          </span>
        </button>
        <button
          type="button"
          class="card w-full cursor-pointer hover:shadow-md transition focus-visible:outline-2 focus-visible:outline-primary border-2 border-base-300"
          :class="{ 'bg-cyan-400': isActive2 }"
          @click="toggleStatus2"
        >
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

// Dynamic Styling avec v-bind:style
const dynamicColor = ref(null);
const dynamicColor2 = ref(null);

function changeColor() {
  dynamicColor.value = dynamicColor.value === null ? "red" : "pink";
}

function changeColor2() {
  dynamicColor2.value = dynamicColor2.value === null ? "purple" : "violet";
}

// Dynamic Styling avec v-bind:class

const isActive = ref(false);

function toggleStatus() {
  isActive.value = !isActive.value;
}

const isActive2 = ref(false);

function toggleStatus2() {
  isActive2.value = !isActive2.value;
}
</script>
