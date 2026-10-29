<template>
  <div class="container mx-auto p-4 md:p-8 space-y-8">
    <div class="text-center">
      <h1 class="text-4xl md:text-5xl font-extrabold text-primary">
        Conditional Rendering avec Vue.js
      </h1>
      <p class="text-lg md:text-xl text-base-content opacity-75 mt-2 max-w-2xl mx-auto">
        Apprenez à afficher ou masquer dynamiquement des éléments du DOM grâce aux directives conditionnelles.
      </p>
    </div>

    <!-- Section Théorie -->
    <section id="theory">
      <div class="card bg-base-100 shadow-xl border border-base-300 p-6">
        <h2 class="card-title text-2xl font-bold mb-3">Qu'est-ce que le Conditional Rendering ?</h2>
        <p class="text-base-content opacity-80">
          Le <strong>Conditional Rendering</strong> permet de contrôler la présence ou la visibilité d'un élément HTML en fonction de l'état d'une donnée réactive. La directive <code class="text-secondary">v-if</code> monte ou démonte réellement l'élément du DOM.
        </p>
        <div class="alert alert-info mt-4 rounded-box shadow-sm">
          <span class="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span class="font-bold">Cas d'usage principaux :</span>
          </span>
          <ul class="list-disc list-inside mt-2 ml-4 space-y-1">
            <li>Afficher ou masquer des blocs selon les actions de l'utilisateur.</li>
            <li>Gérer l'affichage d'un indicateur de chargement ou de messages d'erreur.</li>
            <li>Basculer entre différents états d'une interface (<code class="font-bold">v-if</code> / <code class="font-bold">v-else-if</code> / <code class="font-bold">v-else</code>).</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Exemple : Utilisation de v-if / v-else -->
    <section id="example">
      <div class="card bg-base-100 shadow-xl border border-base-300">
        <div class="card-body">
          <h2 class="card-title text-2xl font-bold mb-2">Exemple : Rendu avec <code class="text-secondary">v-if</code> et <code class="text-secondary">v-else</code></h2>
          <p class="text-sm text-base-content/70 mb-4">
            Affichage conditionnel d'un bloc d'alerte en basculant une variable booléenne :
          </p>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            <!-- Code Shiki -->
            <div class="flex flex-col justify-between">
              <div v-if="codeConditionalHighlighted" v-html="codeConditionalHighlighted" class="overflow-x-auto rounded-lg text-sm"></div>
              <div v-else class="skeleton h-64 w-full rounded-lg"></div>
            </div>

            <!-- Rendu Interactif -->
            <div class="p-6 bg-base-200/50 rounded-box border border-base-300 flex flex-col items-center justify-center text-center space-y-4">
              <span class="text-xs font-bold uppercase tracking-wider text-base-content/50">Rendu interactif</span>

              <button class="btn btn-primary btn-sm rounded-box" @click="toggleMessage">
                {{ showMessage ? 'Masquer' : 'Afficher' }} le message
              </button>

              <div v-if="showMessage" class="alert alert-success shadow-sm w-full max-w-sm">
                <span>✓ Ceci est un message rendu conditionnellement avec <code class="font-bold">v-if</code>.</span>
              </div>
              <div v-else class="alert alert-ghost border border-base-300 shadow-sm w-full max-w-sm">
                <span>ℹ️ Aucun message (Affiché via <code class="font-bold">v-else</code>).</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <div class="text-center">
      <p class="text-sm opacity-75">
        Pour en savoir plus sur le rendu conditionnel, consulte la
        <a href="https://vuejs.org/guide/essentials/conditional.html" class="link link-hover link-primary font-bold" target="_blank">
          documentation officielle de Vue.js
        </a>.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { codeToHtml } from 'shiki';

// --- État réactif de démonstration ---
const showMessage = ref<boolean>(false);

function toggleMessage(): void {
  showMessage.value = !showMessage.value;
}

// --- Snippet brut pour Shiki ---
const snippetConditional = `<template>
  <div>
    <button @click="toggleMessage">
      {{ showMessage ? 'Masquer' : 'Afficher' }} le message
    </button>

    <p v-if="showMessage" class="alert alert-success">
      Ceci est un message rendu conditionnellement.
    </p>
    <p v-else class="alert alert-ghost">
      Aucun message à afficher.
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const showMessage = ref(false);

function toggleMessage() {
  showMessage.value = !showMessage.value;
}
<\/script>`;

// --- Variable d'état pour le HTML coloré ---
const codeConditionalHighlighted = ref<string>('');

onMounted(async () => {
  codeConditionalHighlighted.value = await codeToHtml(snippetConditional, {
    lang: 'vue',
    theme: 'vitesse-dark',
  });
});
</script>