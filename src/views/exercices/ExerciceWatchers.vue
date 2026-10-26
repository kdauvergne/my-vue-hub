<template>
  <div class="max-w-4xl mx-auto flex flex-col gap-4">
    <div class="card bg-base-100 shadow-sm">
      <div class="card-body">
        <h2 class="card-title text-2xl justify-center">
          Compteur avec Watchers
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
              Objectif : comprendre comment surveiller les modifications d'un
              état réactif et exécuter du code à chaque changement grâce à la
              fonction watch.
            </p>

            <p>Créer l'état réactif :</p>
            <p>
              - dans le bloc &lt;script setup&gt;, créer une variable réactive
              leNombre initialisée à 0.
            </p>

            <p>Mettre en place l'interface :</p>
            <p>- afficher la valeur actuelle de leNombre dans le template ;</p>
            <p>
              - ajouter un bouton + qui incrémente leNombre de 1 à chaque clic.
            </p>

            <p>Ajouter le watcher (watch) :</p>
            <p>- importer la fonction watch depuis 'vue' ;</p>
            <p>- créer un watcher qui observe les changements de leNombre ;</p>
            <p>
              - à chaque modification de la valeur, afficher un message de suivi
              dans la console (ex : "Ça surveille").
            </p>

            <p>
              Implémenter la logique de réinitialisation : dans la fonction de
              rappel du watcher, vérifier si la nouvelle valeur atteint 7. Si
              c'est le cas :
            </p>
            <p>
              - afficher un message d'avertissement dans la console (ex :
              "Limite atteinte !") ;
            </p>
            <p>- réinitialiser leNombre à 0.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="card bg-base-100 shadow-sm">
      <div class="card-body">
        <div class="mt-6 flex items-center justify-center">
          <button class="btn btn-primary" @click="leNombre++">+</button>
          <span class="mx-4 text-2xl font-bold"
            >Valeur actuelle : {{ leNombre }}</span
          >
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
import { ref, watch } from "vue";
import CodeBlock from "../../components/CodeBlock.vue";

const correction = `<template>
    <div class="container mx-auto p-4 md:p-8">
        <div class="card bg-base-100 shadow-xl rounded-box p-6">
            <div class="card-body text-center">
                <h2 class="card-title text-2xl font-bold mb-4 mx-auto">Compteur avec Watcher</h2>
                <div class="flex items-center justify-center gap-4">
                    <button @click="leNombre++" type="button"
                        class="btn btn-success transition-transform duration-200 hover:scale-110">+</button>
                    <p class="text-xl font-bold">Valeur actuelle :
                        <span class="badge badge-lg badge-secondary">
                        {{leNombre }}
                    </span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang='js'>
import { ref, watch } from 'vue';

// Déclarez votre variable réactive
const leNombre = ref(0);


// Utilisez \`watch\` pour surveiller les changements de \`leNombre\`
watch(leNombre, (newValue) => {
    console.log('Le Watcher surveille');
    console.log('Nouvelle valeur :', newValue);
    // Réinitialise le compteur à 0 si la valeur atteint 7
    if (newValue === 7) {
        console.log('Limite Atteinte AYAAAAA!');
        leNombre.value = 0;
    }
});

<\/script>`;

const leNombre = ref(0);

watch(leNombre, (newValue) => {
  console.log(`Ça surveille`);
  if (newValue === 7) {
    console.log("Limite atteinte !");
    leNombre.value = 0;
  }
});
</script>
