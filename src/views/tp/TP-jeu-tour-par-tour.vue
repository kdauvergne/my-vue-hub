<template>
  <div class="max-w-4xl mx-auto flex flex-col gap-4">
    <div class="card bg-base-100 shadow-sm">
      <div class="card-body">
        <h2 class="card-title text-2xl justify-center">TP Jeu tour par tour</h2>

        <div
          tabindex="0"
          class="collapse collapse-arrow bg-base-100 border-base-300 border"
        >
          <div
            class="collapse-title font-semibold after:start-5 after:end-auto pe-4 ps-12"
          >
            Consignes de l'exercice
          </div>
          <div class="collapse-content text-sm flex flex-col gap-4">
            <div class="alert alert-info alert-soft">
              <span>
                Créer un jeu d'affrontement au tour par tour (thème au choix) :
                le joueur affronte l'ordinateur, avec des barres de vie.
              </span>
            </div>

            <div>
              <h3 class="font-semibold mb-1">Actions du joueur</h3>
              <div class="flex flex-wrap gap-2">
                <span class="badge badge-outline">Attaque</span>
                <span class="badge badge-outline">Attaque spéciale</span>
                <span class="badge badge-outline">Se soigner</span>
                <span class="badge badge-outline">Abandonner</span>
              </div>
            </div>

            <div>
              <h3 class="font-semibold mb-1">
                <span class="badge badge-primary badge-sm mr-1">1</span>
                Data et attaques
              </h3>
              <ul class="list-disc ps-6 space-y-1">
                <li>Data : vie du joueur, vie de l'adversaire.</li>
                <li>
                  <code>attackAdversaire</code> : le joueur inflige des dégâts à
                  l'adversaire.
                </li>
                <li>
                  <code>attackPlayer</code> : l'adversaire inflige des dégâts au
                  joueur (il frappe plus fort).
                </li>
                <li>
                  Tour par tour : <code>attackAdversaire</code> appelle
                  <code>attackPlayer</code>.
                </li>
              </ul>
            </div>

            <div>
              <h3 class="font-semibold mb-1">
                <span class="badge badge-primary badge-sm mr-1">2</span>
                Barres de vie
              </h3>
              <ul class="list-disc ps-6 space-y-1">
                <li>
                  Lier la largeur de chaque barre au niveau de vie
                  correspondant.
                </li>
                <li>
                  Attention aux interférences entre fonctions appelées par
                  plusieurs événements.
                </li>
              </ul>
            </div>

            <div>
              <h3 class="font-semibold mb-1">
                <span class="badge badge-primary badge-sm mr-1">3</span>
                Attaque spéciale
              </h3>
              <ul class="list-disc ps-6 space-y-1">
                <li>Comme l'attaque normale, mais plus de dégâts.</li>
                <li>Bouton actif seulement tous les 3 tours.</li>
                <li>
                  Data <code>currentRound</code> à 0, incrémentée par
                  <code>attackAdversaire</code> et
                  <code>specialAttackAdversaire</code>.
                </li>
              </ul>
            </div>

            <div>
              <h3 class="font-semibold mb-1">
                <span class="badge badge-primary badge-sm mr-1">4</span>
                Se soigner
              </h3>
              <ul class="list-disc ps-6 space-y-1">
                <li>Rendre une quantité de vie au joueur.</li>
                <li>La vie ne dépasse jamais 100.</li>
                <li>Coûte un round : l'adversaire attaque en retour.</li>
              </ul>
            </div>

            <div>
              <h3 class="font-semibold mb-1">
                <span class="badge badge-primary badge-sm mr-1">5</span>
                Fin de partie
              </h3>
              <ul class="list-disc ps-6 space-y-1">
                <li>
                  Data <code>winner</code> initialisée à <code>null</code>.
                </li>
                <li>Afficher un écran de game over dès qu'il y a un winner.</li>
                <li>Les deux à 0 ou moins : égalité.</li>
                <li>Joueur à 0 ou moins : PERDU.</li>
                <li>Adversaire à 0 ou moins : VICTOIRE.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="card bg-base-100 shadow-sm">
      <div class="card-body">
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
            <button class="btn btn-primary" @click="attackDemon">
              Attaquer
            </button>
            <button
              class="btn btn-secondary"
              :class="isActif"
              @click="attackSpecial"
            >
              Attaque spéciale
            </button>
            <button class="btn btn-success" @click="heal">Soigner</button>
            <button class="btn btn-error" @click="abandon">Abandonner</button>
          </div>
          <p
            v-if="resultat"
            class="alert alert-info alert-soft text-cyan-900 justify-center text-lg font-semibold"
          >
            {{ resultat }}
          </p>

          <div class="card bg-base-200">
            <div class="card-body">
              <h3 class="card-title">Battle log</h3>
              <ul>
                <li v-for="(log, index) in battlelog" :key="index">
                  {{ log }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";

const slayerPV = ref(100);
const demonPV = ref(100);
const degatsSlayer = ref(0);
const degatsDemon = ref(0);

const battlelog = ref([]);

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

  if (slayerPV.value <= 0 || demonPV.value <= 0) {
    console.log("Partie finie");
    return;
  }

  console.log("Attaque de la Slayer contre le Démon !");

  degatsDemon.value = 10;
  // infliger des dégâts à la vie du démon
  demonPV.value = Math.max(demonPV.value - degatsDemon.value, 0);

  battlelog.value.push("Attaque de la Slayer ! Le démon perd 10 PV!");
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

  // enlève 15 PV sans aller en dessous de 0
  slayerPV.value = Math.max(slayerPV.value - 15, 0);

  battlelog.value.push("Le démon contre-attaque ! La Slayer perd 15 PV !");
}

function attackSpecial() {
  console.log("Attaque spéciale de la Slayer !");

  if (slayerPV.value <= 0 || demonPV.value <= 0) {
    console.log("Partie finie");
    return;
  }

  degatsSlayer.value = 20;
  // enlève 20 PV sans aller en dessous de 0
  demonPV.value = Math.max(demonPV.value - degatsSlayer.value, 0);

  if (demonPV.value > 0) {
    attackSlayer();
  }
  currentround.value++;
  battlelog.value.push("Attaque spéciale ! Le démon perd 20 PV !");
  console.log(currentround.value);
}

function heal() {
  if (slayerPV.value <= 0 || demonPV.value <= 0) return;

  // ajoute 30 PV sans dépasser 100
  slayerPV.value = Math.min(slayerPV.value + 30, 100);

  battlelog.value.push("La Slayer s'est soigné +30 PV !");

  if (demonPV.value > 0) {
    attackSlayer();
  }
  currentround.value++;
}

function abandon() {
  if (slayerPV.value <= 0 || demonPV.value <= 0) return;
  slayerPV.value = 0;
}
</script>
