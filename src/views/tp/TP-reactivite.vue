<template>
  <div class="max-w-4xl mx-auto flex flex-col gap-4">
    <div class="card bg-base-100 shadow-sm">
      <div class="card-body">
        <h2 class="card-title text-2xl justify-center">
          TP Réactivité : le Numéro Gagnant
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
              Objectif : combiner computed et watch pour gérer un jeu de
              devinette.
            </p>

            <p>Variables et clics :</p>
            <p>
              - créer la variable réactive leNombre (départ à 0) et une variable
              msg vide ;
            </p>
            <p>
              - créer une fonction pour ajouter 1 ou 5 à leNombre au clic sur
              les boutons.
            </p>

            <p>
              Indice dynamique (computed) : créer la propriété indice qui
              retourne :
            </p>
            <p>- "ESSAIE ENCORE !" si le nombre est inférieur à 7 ;</p>
            <p>- "7... BINGO !" si le nombre est égal à 7 ;</p>
            <p>- "Tu as dépassé le nombre !" si le nombre est supérieur à 7.</p>

            <p>
              Sécurité réinitialisation (watch) : observer leNombre avec un
              watch. Si la valeur dépasse 30 :
            </p>
            <p>- afficher un message dans msg ;</p>
            <p>- réinitialiser leNombre à 0 après 7 secondes (setTimeout).</p>
          </div>
        </div>
      </div>
    </div>

    <div class="card bg-base-100 shadow-sm">
      <div class="card-body">
        <div class="flex flex-col gap-4">
          <div class="card bg-base-200 pb-4">
            <div class="card-body items-center gap-4">
              <h2 class="card-title">Le nombre :</h2>
              <span
                class="bg-accent text-accent-content rounded-box px-6 py-3 text-5xl font-bold"
                >{{ leNombre }}</span
              >
            </div>
            <h3
              class="text-center text-lg font-semibold uppercase tracking-wide text-base-content/70"
            >
              {{ indice }}
            </h3>
            <h3
              v-if="message"
              class="text-center text-lg font-semibold uppercase tracking-wide text-fuchsia-600"
            >
              {{ message }}
            </h3>
            <div class="card-body items-center flex-row mx-auto">
              <button class="btn btn-success mx-auto" @click="augmenter(1)">
                +1
              </button>
              <button class="btn btn-error mx-auto" @click="augmenter(5)">
                +5
              </button>
            </div>
          </div>
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
import { ref, watch, computed } from "vue";
import CodeBlock from "../../components/CodeBlock.vue";
import correction from "../corrections/correction-tp-reactivite.vue?raw";

const leNombre = ref(0);
const message = ref("");

function augmenter(n) {
  leNombre.value += n;
}

const indice = computed(() => {
  if (leNombre.value < 7) return "ESSAIE ENCORE !";
  if (leNombre.value === 7) return "7... BINGO !";
  return "Tu as dépassé le nombre !";
});

watch(leNombre, (newNombre) => {
  if (newNombre > 30) {
    message.value = "Beaucoup trop !";
    setTimeout(() => {
      leNombre.value = 0;
      message.value = "";
    }, 7000);
  }
});
</script>
