<template>
  <div class="card bg-base-100 shadow-xl mb-6">
    <div class="card-body">
      <h2 class="card-title text-2xl font-bold mb-4">
        Exercice Dynamic Styling (class)
      </h2>

      <input
        type="text"
        v-model="inputText"
        placeholder="Hello World !"
        class="input input-bordered w-full mb-4"
      />
      <h2
        class="text-xl font-bold mb-2"
        :class="{
          maClasseHello: inputText.toLowerCase() === 'hello',
          maClasseWorld: inputText.toLowerCase() === 'world',
          hide: showFirstH2 ? false : true,
        }"
      >
        Hello World (couleur dynamique)
      </h2>
      <input
        type="text"
        v-model="inputText2"
        placeholder="Tapez une couleur CSS (ex: red, blue, #ff0000)"
        class="input input-bordered w-full mb-4 text"
      />
      <h2
        class="text-xl font-bold mb-2 text-white"
        :style="{
          backgroundColor: inputText2 === '' ? 'red' : inputText2.toLowerCase(),
        }"
      >
        Hello World (class dynamique)
      </h2>

      <button
        class="btn btn-primary mt-4 self-s"
        @click="showFirstH2 = !showFirstH2"
      >
        {{ showFirstH2 ? "Cacher" : "Afficher" }} le premier H2
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const inputText = ref("");

const inputText2 = ref("");

const showFirstH2 = ref(true);
</script>
<style scoped>
.maClasseHello {
  background-color: fuchsia;
  color: lightgreen;
}

.maClasseWorld {
  background-color: lightgreen;
  color: fuchsia;
}

.hide {
  display: none;
}
</style>
