<template>
  <div class="container mx-auto p-4 md:p-8 space-y-8">
    <div class="text-center">
      <h1 class="text-4xl md:text-5xl font-extrabold text-primary">
        Le Cycle de Vie des Composants
      </h1>
      <p class="text-lg md:text-xl text-base-content opacity-75 mt-2 max-w-2xl mx-auto">
        Chaque composant Vue passe par une série d'étapes d'initialisation, de mise à jour et de destruction. Les <strong class="text-primary">hooks du cycle de vie</strong> permettent d'exécuter du code à des moments précis.
      </p>
    </div>

    <!-- Section Théorie : Vue d'ensemble des étapes -->
    <section id="theory">
      <div class="card bg-base-100 shadow-xl border border-base-300 p-6 space-y-6">
        <h2 class="card-title text-2xl font-bold">Les 4 étapes principales</h2>

        <div class="w-full overflow-x-auto py-2">
          <ul class="steps steps-vertical lg:steps-horizontal w-full text-sm">
            <li class="step step-primary font-medium">Création (<code class="text-xs">&lt;script setup&gt;</code>)</li>
            <li class="step step-primary font-medium">Montage (<code class="text-xs">onMounted</code>)</li>
            <li class="step step-primary font-medium">Mise à jour (<code class="text-xs">onUpdated</code>)</li>
            <li class="step step-primary font-medium">Démontage (<code class="text-xs">onUnmounted</code>)</li>
          </ul>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          <div class="p-4 rounded-box bg-base-200/50 border border-base-300 space-y-1">
            <h3 class="font-bold text-sm text-primary">🎯 onMounted</h3>
            <p class="text-xs text-base-content/80">
              Déclenché lorsque le composant est inséré dans le DOM. Idéal pour exécuter des requêtes API (fetch), initialiser des timers ou cibler des éléments du DOM.
            </p>
          </div>
          <div class="p-4 rounded-box bg-base-200/50 border border-base-300 space-y-1">
            <h3 class="font-bold text-sm text-secondary">🔄 onUpdated</h3>
            <p class="text-xs text-base-content/80">
              Déclenché après qu'un changement de donnée réactive a répercuté ses modifications dans le DOM virtuel.
            </p>
          </div>
          <div class="p-4 rounded-box bg-base-200/50 border border-base-300 space-y-1">
            <h3 class="font-bold text-sm text-error">🗑️ onBeforeUnmount / onUnmounted</h3>
            <p class="text-xs text-base-content/80">
              Déclenché juste avant et après le retrait du composant du DOM. Essentiel pour nettoyer les écoutants d'événements, websockets ou <code class="text-xs">setInterval</code>.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Démonstration & Code -->
    <section id="example">
      <div class="card bg-base-100 shadow-xl border border-base-300">
        <div class="card-body">
          <h2 class="card-title text-2xl font-bold mb-2">Exemple Pratique&nbsp;: Observer les Hooks</h2>
          <p class="text-sm text-base-content/70 mb-4">
            Code d'illustration et console de logs interactive en direct&nbsp;:
          </p>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            <!-- Code Shiki -->
            <div class="flex flex-col justify-between">
              <div v-if="codeLifecycleHighlighted" v-html="codeLifecycleHighlighted" class="overflow-x-auto rounded-lg text-sm"></div>
              <div v-else class="skeleton h-80 w-full rounded-lg"></div>
            </div>

            <!-- Rendu Interactif + Console Virtuelle -->
            <div class="p-6 bg-base-200/50 rounded-box border border-base-300 flex flex-col justify-between space-y-4">
              <div>
                <span class="text-xs font-bold uppercase tracking-wider text-base-content/50 mb-3 block">Rendu interactif</span>

                <div class="flex items-center justify-between p-4 bg-base-100 rounded-box border border-base-300 mb-4">
                  <div>
                    <p class="text-xs text-base-content/60">État du compteur&nbsp;:</p>
                    <p class="text-2xl font-black text-primary font-mono">{{ counter }}</p>
                  </div>
                  <button class="btn btn-primary btn-sm rounded-box" @click="incrementCounter">
                    ➕ Incrémenter
                  </button>
                </div>

                <!-- Console de logs intégrée -->
                <div class="space-y-2">
                  <div class="flex justify-between items-center">
                    <span class="text-xs font-bold text-base-content/70">Console de suivi (Live Logs)&nbsp;:</span>
                    <button class="btn btn-ghost btn-xs text-xs" @click="logs = []">Effacer</button>
                  </div>
                  <div class="bg-neutral text-neutral-content font-mono text-xs p-3 rounded-box h-40 overflow-y-auto space-y-1">
                    <p v-if="logs.length === 0" class="opacity-50 italic">// Aucun événement enregistré...</p>
                    <p v-for="(log, index) in logs" :key="index" class="leading-relaxed">
                      {{ log }}
                    </p>
                  </div>
                </div>
              </div>

              <div class="pt-2">
                <button class="btn btn-outline btn-error btn-xs w-full" @click="reloadDemo">
                  🔄 Simuler le rechargement du composant
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
        Pour en savoir plus sur le cycle de vie, consulte la
        <a href="https://vuejs.org/guide/essentials/lifecycle.html" class="link link-hover link-primary font-bold" target="_blank">
          documentation officielle de Vue.js
        </a>.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUpdated, onBeforeUnmount, onUnmounted } from 'vue';
import { codeToHtml } from 'shiki';

// --- État réactif du composant ---
const counter = ref<number>(0);
const logs = ref<string[]>([]);

function addLog(message: string): void {
  const timestamp = new Date().toLocaleTimeString();
  logs.value.unshift(`[${timestamp}] ${message}`);
}

function incrementCounter(): void {
  counter.value++;
  addLog(`🔘 Clic : Incrémentation à ${counter.value}`);
}

// --- Hooks du cycle de vie ---
onMounted(() => {
  console.log('✅ onMounted : Composant inséré dans le DOM.');
});

onUpdated(() => {
  // Uniquement dans la console dev pour éviter la boucle infinie de ré-affichage
  console.log(`🔄 onUpdated : DOM mis à jour (compteur = ${counter.value}).`);
});

onBeforeUnmount(() => {
  console.log('⚠️ onBeforeUnmount : Nettoyage avant suppression.');
});

onUnmounted(() => {
  console.log('🗑️ onUnmounted : Composant détruit.');
});

function reloadDemo(): void {
  location.reload();
}

// --- Snippet brut pour Shiki ---
const snippetLifecycle = `<script setup>
import { 
  ref, 
  onMounted, 
  onUpdated, 
  onBeforeUnmount, 
  onUnmounted 
} from 'vue';

const counter = ref(0);

// 1. Montage : Appels API, écouteurs d'événements
onMounted(() => {
  console.log('✅ Composant monté dans le DOM');
});

// 2. Mise à jour : Réaction aux changements d'état
onUpdated(() => {
  console.log('🔄 DOM mis à jour, counter =', counter.value);
});

// 3. Avant démontage : Nettoyage (timers, listeners)
onBeforeUnmount(() => {
  console.log('⚠️ Le composant va être démonté');
});

// 4. Démontage complet
onUnmounted(() => {
  console.log('🗑️ Composant complètement détruit');
});
<\/script>

<template>
  <div>
    <p>Compteur : {{ counter }}</p>
    <button @click="counter++">Incrémenter</button>
  </div>
</template>`;

// --- Variable d'état pour le HTML coloré ---
const codeLifecycleHighlighted = ref<string>('');

onMounted(async () => {
  codeLifecycleHighlighted.value = await codeToHtml(snippetLifecycle, {
    lang: 'vue',
    theme: 'vitesse-dark',
  });
});
</script>