<template>
  <div class="container mx-auto p-4 md:p-8 space-y-8">
    <!-- Header / Intro -->
    <div class="text-center">
      <h1 class="text-4xl md:text-5xl font-extrabold text-primary">
        📊 Graphiques avec Chart.js & vue-chartjs
      </h1>
      <p class="text-lg md:text-xl text-base-content opacity-75 mt-2 max-w-2xl mx-auto">
        <strong>Chart.js</strong> est la bibliothèque JavaScript la plus populaire pour générer des graphiques réactifs. Découvre comment l'installer seule ou avec son wrapper officiel <strong>vue-chartjs</strong>.
      </p>
    </div>

    <!-- Section 1 : Méthodes d'installation (Classique vs Wrapper) -->
    <section id="installation">
      <div class="card bg-base-100 shadow-xl border border-base-300 p-6 space-y-6">
        <h2 class="card-title text-2xl font-bold">1. Les méthodes d'installation</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Installation classique -->
          <div class="p-4 rounded-box bg-base-200/50 border border-base-300 flex flex-col justify-between space-y-3">
            <div>
              <h3 class="font-bold text-lg text-primary mb-1">A. Installation classique (Chart.js seule)</h3>
              <p class="text-xs text-base-content/80 mb-3">
                Utilise Chart.js directement. Nécessite de cibler un élément <code class="font-bold">&lt;canvas&gt;</code> via une référence (<code class="font-bold">ref()</code>) et d'instancier la classe <code class="font-bold">Chart</code> manuellement.
              </p>
            </div>
            <div>
              <div v-if="codeInstallClassicHighlighted" v-html="codeInstallClassicHighlighted" class="overflow-x-auto rounded-lg text-sm"></div>
              <div v-else class="skeleton h-24 w-full rounded-lg"></div>
            </div>
          </div>

          <!-- Installation Wrapper -->
          <div class="p-4 rounded-box bg-base-200/50 border border-base-300 flex flex-col justify-between space-y-3">
            <div>
              <h3 class="font-bold text-lg text-secondary mb-1">B. Installation recommandée (avec vue-chartjs)</h3>
              <p class="text-xs text-base-content/80 mb-3">
                Ajoute le wrapper officiel <code class="font-bold">vue-chartjs</code> pour utiliser directement des composants Vue (<code class="font-bold">&lt;Bar /&gt;</code>, <code class="font-bold">&lt;Line /&gt;</code>) avec réactivité intégrée.
              </p>
            </div>
            <div>
              <div v-if="codeInstallWrapperHighlighted" v-html="codeInstallWrapperHighlighted" class="overflow-x-auto rounded-lg text-sm"></div>
              <div v-else class="skeleton h-24 w-full rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 2 : Enregistrement des modules Chart.js -->
    <section id="registration">
      <div class="card bg-base-100 shadow-xl border border-base-300 p-6 space-y-4">
        <h2 class="card-title text-2xl font-bold">2. Enregistrement des modules (Tree-shaking)</h2>
        <p class="text-sm text-base-content/80">
          Chart.js est modulaire : pour optimiser le poids de ton bundle, il faut enregistrer explicitement les composants utiles (échelles, barres, légendes) via <code class="text-secondary">ChartJS.register()</code>.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <!-- Configuration Vue 3 -->
          <div>
            <span class="text-xs font-bold uppercase tracking-wider text-base-content/50 mb-2 block">Dans Vue 3 (<code class="text-xs">main.ts</code> ou Composant)</span>
            <div v-if="codeVueSetupHighlighted" v-html="codeVueSetupHighlighted" class="overflow-x-auto rounded-lg text-sm"></div>
            <div v-else class="skeleton h-48 w-full rounded-lg"></div>
          </div>

          <!-- Configuration Nuxt 3 -->
          <div>
            <span class="text-xs font-bold uppercase tracking-wider text-base-content/50 mb-2 block">Dans Nuxt 3 (<code class="text-xs">plugins/chartjs.client.ts</code>)</span>
            <div v-if="codeNuxtSetupHighlighted" v-html="codeNuxtSetupHighlighted" class="overflow-x-auto rounded-lg text-sm"></div>
            <div v-else class="skeleton h-48 w-full rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 3 : Mise à jour réactive avec Computed -->
    <section id="dynamic-usage">
      <div class="card bg-base-100 shadow-xl border border-base-300 p-6 space-y-4">
        <h2 class="card-title text-2xl font-bold">3. Données dynamiques avec <code class="text-secondary">computed()</code></h2>
        <p class="text-sm text-base-content/80">
          La documentation officielle de <strong>vue-chartjs</strong> préconise l'utilisation d'une propriété calculée (<code class="text-secondary">computed()</code>) pour définir l'objet <code class="text-secondary">chartData</code>. Cela garantit que le graphique redessine automatiquement les données dès qu'une dépendance réactive évolue.
        </p>

        <!-- Code Shiki : Usage réactif -->
        <div v-if="codeDynamicHighlighted" v-html="codeDynamicHighlighted" class="overflow-x-auto rounded-lg text-sm"></div>
        <div v-else class="skeleton h-64 w-full rounded-lg"></div>
      </div>
    </section>

    <!-- Section 4 : Démo Interactive -->
    <section id="demo">
      <div class="card bg-base-100 shadow-xl border border-base-300">
        <div class="card-body">
          <h2 class="card-title text-2xl font-bold mb-2">Exemple Interactif</h2>
          <p class="text-sm text-base-content/70 mb-4">
            Composant graphique réactif en temps réel avec <code class="text-secondary">vue-chartjs</code>&nbsp;:
          </p>

          <div class="p-4 bg-base-200/50 rounded-box border border-base-300">
            <BarChartDynamic />
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <div class="text-center">
      <p class="text-sm opacity-75">
        Pour en savoir plus sur les autres types de graphiques, consulte la
        <a href="https://vue-chartjs.org/" class="link link-hover link-primary font-bold" target="_blank">
          documentation officielle de vue-chartjs
        </a>.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { codeToHtml } from 'shiki';
import BarChartDynamic from '../../components/BarChart.vue';

// --- Snippets bruts pour Shiki ---
const snippetInstallClassic = `# Installation brute de Chart.js
pnpm add chart.js

# Ou avec npm :
npm install chart.js`;

const snippetInstallWrapper = `# Installation recommandée avec le wrapper Vue
pnpm add chart.js vue-chartjs

# Ou avec npm :
npm install chart.js vue-chartjs`;

const snippetVueSetup = `// src/main.ts
import { createApp } from 'vue';
import App from './App.vue';
import {
  Chart as ChartJS,
  Title, Tooltip, Legend, BarElement,
  CategoryScale, LinearScale
} from 'chart.js';

// Enregistrement global des modules Chart.js
ChartJS.register(
  Title, Tooltip, Legend, BarElement,
  CategoryScale, LinearScale
);

createApp(App).mount('#app');`;

const snippetNuxtSetup = `// plugins/chartjs.client.ts
import {
  Chart as ChartJS,
  Title, Tooltip, Legend, BarElement,
  CategoryScale, LinearScale
} from 'chart.js';

export default defineNuxtPlugin(() => {
  ChartJS.register(
    Title, Tooltip, Legend, BarElement,
    CategoryScale, LinearScale
  );
});`;

const snippetDynamic = `<template>
  <div class="h-64">
    <Bar :data="chartData" :options="chartOptions" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { Bar } from 'vue-chartjs';
import {
  Chart as ChartJS, Title, Tooltip, Legend,
  BarElement, CategoryScale, LinearScale
} from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const dynamicValue = ref(1200);

// Bonne pratique vue-chartjs : encapsulation dans computed() pour réactivité automatique
const chartData = computed(() => ({
  labels: ['Janvier', 'Février', 'Mars'],
  datasets: [{
    label: 'Ventes (€)',
    data: [dynamicValue.value, 1500, 900],
    backgroundColor: '#3b82f6'
  }]
}));

const chartOptions = { responsive: true, maintainAspectRatio: false };
<\/script>`;

// --- Variables d'état pour le HTML coloré ---
const codeInstallClassicHighlighted = ref<string>('');
const codeInstallWrapperHighlighted = ref<string>('');
const codeVueSetupHighlighted = ref<string>('');
const codeNuxtSetupHighlighted = ref<string>('');
const codeDynamicHighlighted = ref<string>('');

onMounted(async () => {
  const [installClassic, installWrapper, vueCode, nuxtCode, dynamicCode] = await Promise.all([
    codeToHtml(snippetInstallClassic, { lang: 'bash', theme: 'vitesse-dark' }),
    codeToHtml(snippetInstallWrapper, { lang: 'bash', theme: 'vitesse-dark' }),
    codeToHtml(snippetVueSetup, { lang: 'typescript', theme: 'vitesse-dark' }),
    codeToHtml(snippetNuxtSetup, { lang: 'typescript', theme: 'vitesse-dark' }),
    codeToHtml(snippetDynamic, { lang: 'vue', theme: 'vitesse-dark' })
  ]);

  codeInstallClassicHighlighted.value = installClassic;
  codeInstallWrapperHighlighted.value = installWrapper;
  codeVueSetupHighlighted.value = vueCode;
  codeNuxtSetupHighlighted.value = nuxtCode;
  codeDynamicHighlighted.value = dynamicCode;
});
</script>