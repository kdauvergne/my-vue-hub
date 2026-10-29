<template>
  <div class="container mx-auto p-4 md:p-8 space-y-8">
    <div class="text-center">
      <h1 class="text-4xl md:text-5xl font-extrabold text-primary">
        List Rendering avec Vue.js
      </h1>
      <p class="text-lg md:text-xl text-base-content opacity-75 mt-2 max-w-2xl mx-auto">
        Découvrez comment utiliser la directive <code class="text-secondary">v-for</code> pour afficher dynamiquement des listes dans Vue.js.
      </p>
    </div>

    <!-- Section Théorie -->
    <section id="theory">
      <div class="card bg-base-100 shadow-xl border border-base-300 p-6">
        <h2 class="card-title text-2xl font-bold mb-3">Qu'est-ce que le List Rendering ?</h2>
        <p class="text-base-content opacity-80">
          Le <strong>List Rendering</strong> permet d'itérer sur des tableaux ou des objets afin de générer dynamiquement des éléments HTML dans le DOM.
        </p>
        <div class="alert alert-info mt-4 rounded-box shadow-sm">
          <span class="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span class="font-bold">Points clés :</span>
          </span>
          <ul class="list-disc list-inside mt-2 ml-4 space-y-1">
            <li>Indispensable pour afficher des collections réactives (produits, utilisateurs, messages).</li>
            <li>Exige toujours une clé unique via l'attribut <code class="font-bold">:key</code> afin de permettre à Vue d'optimiser les mises à jour du DOM virtuel.</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Exemple : Utilisation de v-for -->
    <section id="example">
      <div class="card bg-base-100 shadow-xl border border-base-300">
        <div class="card-body">
          <h2 class="card-title text-2xl font-bold mb-2">Exemple : Rendu de liste avec <code class="text-secondary">v-for</code></h2>
          <p class="text-sm text-base-content/70 mb-4">
            Gestion dynamique d'une liste de tâches avec affichage conditionnel lorsque le tableau est vide :
          </p>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            <!-- Code Shiki -->
            <div class="flex flex-col justify-between">
              <div v-if="codeListHighlighted" v-html="codeListHighlighted" class="overflow-x-auto rounded-lg text-sm"></div>
              <div v-else class="skeleton h-64 w-full rounded-lg"></div>
            </div>

            <!-- Rendu Interactif -->
            <div class="p-6 bg-base-200/50 rounded-box border border-base-300 flex flex-col justify-between space-y-4">
              <div>
                <span class="text-xs font-bold uppercase tracking-wider text-base-content/50 mb-2 block">Rendu interactif</span>
                <h3 class="text-lg font-bold mb-3">Liste de tâches :</h3>

                <ul v-if="tasks.length > 0" class="flex flex-wrap gap-2">
                  <li
                    v-for="(oneTask, index) in tasks"
                    :key="index"
                    class="badge badge-primary badge-outline p-3 text-sm font-medium"
                  >
                    {{ index }} - {{ oneTask }}
                  </li>
                </ul>

                <div v-else class="alert alert-warning shadow-sm">
                  <span>⚠️ Aucune tâche disponible. Cliquez sur le bouton pour en ajouter une.</span>
                </div>
              </div>

              <div class="pt-2">
                <button class="btn btn-primary btn-sm rounded-box w-full" @click="addTask">
                  Ajouter une tâche
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <div class="text-center">
      <p class="text-sm opacity-75">
        Pour en savoir plus sur le List Rendering, consulte la
        <a href="https://vuejs.org/guide/essentials/list.html" class="link link-hover link-primary font-bold" target="_blank">
          documentation officielle de Vue.js
        </a>.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { codeToHtml } from 'shiki';

// --- Données réactives pour l'exemple ---
const tasks = ref<string[]>([]);

function addTask(): void {
  tasks.value.push(`Tâche ${tasks.value.length + 1}`);
}

// --- Snippet brut pour Shiki ---
const snippetList = `<template>
  <div>
    <h3>Liste de tâches :</h3>
    <ul>
      <li
        v-for="(oneTask, index) in tasks"
        :key="index"
        class="badge badge-outline"
      >
        {{ index }} - {{ oneTask }}
      </li>
    </ul>

    <p v-if="tasks.length === 0" class="alert alert-warning">
      Aucune tâche disponible.
    </p>

    <button @click="addTask">Ajouter une tâche</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const tasks = ref([]);

function addTask() {
  tasks.value.push(\`Tâche \${tasks.value.length + 1}\`);
}
<\/script>`;

// --- Variable d'état pour le HTML coloré ---
const codeListHighlighted = ref<string>('');

onMounted(async () => {
  codeListHighlighted.value = await codeToHtml(snippetList, {
    lang: 'vue',
    theme: 'vitesse-dark',
  });
});
</script>