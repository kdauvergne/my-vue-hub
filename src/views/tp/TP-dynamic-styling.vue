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
              Premier input : selon le texte saisi, appliquer une classe CSS sur
              le h2 situé en dessous :
            </p>
            <p>- hello → classe maClasseHello ;</p>
            <p>- world → classe maClasseWorld.</p>

            <p>
              Second input : l'utilisateur saisit le nom d'une couleur CSS, qui
              s'applique en background-color sur le h2 situé en dessous.
            </p>

            <p>
              Bouton : permet d'afficher ou de masquer le premier h2, sans
              utiliser v-if.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="card bg-base-100 shadow-sm">
      <div class="card-body">
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
            backgroundColor:
              inputText2 === '' ? 'red' : inputText2.toLowerCase(),
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
