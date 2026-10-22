<template>
  <div class="card bg-base-100 shadow-sm max-w-4xl mx-auto my-8">
    <div class="card-body">
      <h2 class="card-title">TP Jeu tour par tour</h2>

      <div class="flex flex-col gap-4">
        <div class="flex flex-row gap-4">
          <div class="card bg-base-200 flex-1">
            <div class="card-body">
              <h3 class="card-title">Slayer</h3>
              <img
                src="/src/assets/huntress-x8.png"
                alt="Slayer"
                class="w-32 mx-auto"
              />
              <progress
                class="progress progress-success w-full"
                :value="slayerPV"
                max="100"
              ></progress>
            </div>
          </div>

          <div class="card bg-base-200 flex-1">
            <div class="card-body">
              <h3 class="card-title">Demon</h3>
              <img
                src="/src/assets/vampire-x8.png"
                alt="Vampire"
                class="w-32 mx-auto"
              />
              <progress
                class="progress progress-primary w-full"
                :value="demonPV"
                max="100"
              ></progress>
            </div>
          </div>
        </div>

        <div class="flex flex-row flex-wrap gap-2 justify-center">
          <button class="btn btn-primary" @click="attackDemon">Attaquer</button>
          <button class="btn btn-secondary" :class="isActif">
            Attaque spéciale
          </button>
          <button class="btn btn-success">Soigner</button>
          <button class="btn btn-error">Abandonner</button>
        </div>
        <p v-if="resultat">{{ resultat }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";

const slayerPV = ref(100);
const demonPV = ref(100);

const currentround = ref(0);

const resultat = computed(() => {
  if (slayerPV.value <= 0 && demonPV.value <= 0) {
    return "Égalité !";
  } else if (slayerPV.value <= 0) {
    return "Le démon a gagné !";
  } else if (demonPV.value <= 0) {
    return "La slayer a gagné !";
  } else if (slayerPV.value === 100 && demonPV.value === 100) {
    return "Début de la partie...";
  } else {
    return "";
  }
});

const isActif = computed(() =>
  currentround.value % 3 === 0 ? "" : "btn-disabled",
);

function attackDemon() {
  // lancer une attaque contre le démon
  console.log("Attaque de la Slayer contre le Démon !");

  if (slayerPV.value <= 0 || demonPV.value <= 0) {
    console.log("Partie finie");
    return;
  }

  // infliger des dégâts à la vie du démon
  demonPV.value -= 10;

  // appeler la fonction attackSlayer pour le tour par tour
  if (demonPV.value > 0) {
    attackSlayer();
  }

  currentround.value++;
  console.log(currentround.value);
}

function attackSlayer() {
  console.log("Attaque du Démon contre la Slayer!");
  // lancer une attaque contre la slayer
  // infliger des dégats à la vie de la slayer (le démon tape + fort)
  slayerPV.value -= 15;
}
</script>
