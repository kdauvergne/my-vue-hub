<template>
  <div class="container mx-auto p-4 md:p-8 space-y-8">
    <div class="text-center">
      <h1 class="text-4xl md:text-5xl font-extrabold text-primary">
        L'interpolation de texte dans Vue.js
      </h1>
      <p class="text-lg md:text-xl text-base-content opacity-75 mt-2 max-w-2xl mx-auto">
        L'interpolation permet d'insérer dynamiquement des valeurs JavaScript dans le DOM.
      </p>
    </div>

    <!-- DÉMONSTRATION INTERACTIVE -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
      <!-- Exemples de base -->
      <div class="card bg-base-100 shadow-xl rounded-box">
        <div class="card-body">
          <h2 class="card-title text-2xl font-bold mb-4">Rendu dynamique en direct</h2>
          <div class="prose max-w-none space-y-2">
            <p>Message : <span class="badge badge-info text-info-content">{{ message }}</span></p>
            <p>Donnée classique : <span class="badge badge-secondary text-secondary-content">{{ variableClassic }}</span></p>
            <p>Tableau : <span class="badge badge-accent text-accent-content">{{ tableauAdmin }}</span></p>
          </div>
        </div>
      </div>

      <!-- Expressions et fonctions -->
      <div class="card bg-base-100 shadow-xl rounded-box">
        <div class="card-body">
          <h2 class="card-title text-2xl font-bold mb-4">Expressions et fonctions</h2>
          <div class="prose max-w-none space-y-2">
            <p>Opération (2 + 2) : <span class="badge badge-ghost">{{ 2 + 2 }}</span></p>
            <p>Nom complet : <span class="badge badge-ghost">{{ firstName + ' ' + lastName }}</span></p>
            <p>Majuscules : <span class="badge badge-ghost">{{ toUpperCase(message) }}</span></p>
          </div>
        </div>
      </div>
    </div>

    <!-- BLOC SHIKI : CODE SOURCE SANS CONFLIT -->
    <div class="card bg-base-100 shadow-xl rounded-box">
      <div class="card-body">
        <h2 class="card-title text-2xl font-bold mb-2">Code source de la leçon</h2>
        <p class="text-sm text-base-content/70 mb-4">
          Extrait du template et du script générant l'affichage ci-dessus :
        </p>

        <!-- Injection du HTML coloré par Shiki -->
        <div v-if="highlightedCode" v-html="highlightedCode" class="overflow-x-auto rounded-lg text-sm"></div>
        <div v-else class="skeleton h-48 w-full rounded-lg"></div>
      </div>
    </div>

    <div class="text-center">
      <p class="text-sm md:text-base text-base-content opacity-50">
        Pour plus d'informations, consultez la
        <a href="https://vuejs.org/guide/essentials/template-syntax.html" target="_blank" class="link link-hover text-primary font-bold">
          documentation officielle
        </a>.
      </p>
    </div>
  </div>
</template>

<script setup lang="js">
import { ref, onMounted } from 'vue';
import { codeToHtml } from 'shiki';

// --- Données réactives pour l'affichage interactif ---
const variableClassic = 'STEVEN VANDAMME';
const message = ref('Bonjour, Nuxt.js !');
const firstName = ref('JigZo');
const lastName = ref('Dupont');
const tableauAdmin = ref([111, 'stringg']);

const toUpperCase = (str) => str.toUpperCase();

// --- Code source brut sous forme de String ---
// Placé dans une variable JS, Vue n'essaiera pas de compiler le contenu de {{ ... }}
const snippet = `<template>
  <div>
    <p>Message : {{ message }}</p>
    <p>Calcul : {{ 2 + 2 }}</p>
    <p>Nom complet : {{ firstName + ' ' + lastName }}</p>
    <p>Fonction : {{ toUpperCase(message) }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const message = ref('Bonjour, Vue.js !');
const firstName = ref('JigZo');
const lastName = ref('Dupont');

const toUpperCase = (str) => str.toUpperCase();
<\/script>`;

// --- Génération de la coloration syntaxique ---
const highlightedCode = ref('');

onMounted(async () => {
  highlightedCode.value = await codeToHtml(snippet, {
    lang: 'vue',
    theme: 'vitesse-dark', // ou 'nord', 'github-dark', etc.
  });
});
</script>