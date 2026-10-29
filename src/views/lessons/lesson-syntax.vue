<template>
  <div class="container mx-auto p-4 md:p-8 space-y-8">
    <!-- Carte principale -->
    <div class="card bg-base-100 shadow-xl border border-base-300">
      <div class="card-body">
        <h1 class="text-3xl md:text-4xl font-extrabold text-center mb-4 text-primary">
          Comprendre les deux syntaxes de Vue.js
        </h1>
        <p class="text-center text-base md:text-lg text-base-content/75 mb-6 max-w-2xl mx-auto">
          Vue.js propose deux approches pour écrire vos composants :
          <strong>le Mode Options</strong> et <strong>le Mode Composition</strong>.
        </p>

        <!-- Tabs DaisyUI -->
        <div class="tabs tabs-boxed justify-center mb-6">
          <button
            class="tab"
            :class="{ 'tab-active': activeTab === 'options' }"
            @click="activeTab = 'options'"
          >
            Mode Options
          </button>
          <button
            class="tab"
            :class="{ 'tab-active': activeTab === 'composition' }"
            @click="activeTab = 'composition'"
          >
            Mode Composition
          </button>
        </div>

        <!-- Contenu dynamique : Mode Options -->
        <div v-if="activeTab === 'options'" class="space-y-4">
          <h2 class="text-2xl font-semibold mb-2">Mode Options</h2>
          <div class="alert alert-info shadow-sm">
            <span>
              <strong>Bon à savoir :</strong>
              Idéal pour débuter, le Mode Options structure votre composant avec des sections claires :
              <code class="font-bold">data</code>, <code class="font-bold">methods</code>, <code class="font-bold">computed</code>, etc.
            </span>
          </div>

          <!-- Bloc Shiki Options -->
          <div v-if="codeOptionsHighlighted" v-html="codeOptionsHighlighted" class="overflow-x-auto rounded-lg text-sm"></div>
          <div v-else class="skeleton h-64 w-full rounded-lg"></div>
        </div>

        <!-- Contenu dynamique : Mode Composition -->
        <div v-else class="space-y-4">
          <h2 class="text-2xl font-semibold mb-2">Mode Composition</h2>
          <div class="alert alert-success shadow-sm">
            <span>
              <strong>Bon à savoir :</strong>
              Le Mode Composition donne plus de flexibilité, idéal pour les projets complexes.
              Tout se passe dans <code class="font-bold">&lt;script setup&gt;</code> avec des <code class="font-bold">ref</code> et <code class="font-bold">reactive</code>.
            </span>
          </div>

          <!-- Bloc Shiki Composition -->
          <div v-if="codeCompositionHighlighted" v-html="codeCompositionHighlighted" class="overflow-x-auto rounded-lg text-sm"></div>
          <div v-else class="skeleton h-64 w-full rounded-lg"></div>
        </div>

        <!-- Toggle Switch DaisyUI -->
        <div class="text-center mt-6">
          <label class="label cursor-pointer justify-center gap-3">
            <span class="label-text font-semibold">Basculer de mode</span>
            <input
              type="checkbox"
              class="toggle toggle-primary"
              :checked="activeTab === 'composition'"
              @change="toggleMode"
            />
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { codeToHtml } from 'shiki';

type TabMode = 'options' | 'composition';

const activeTab = ref<TabMode>('options');

function toggleMode(): void {
  activeTab.value = activeTab.value === 'options' ? 'composition' : 'options';
}

// --- Snippets bruts pour Shiki ---
const snippetOptions = `<script>
export default {
  data() {
    return {
      message: 'Bonjour depuis le Mode Options'
    }
  },
  methods: {
    direBonjour() {
      alert(this.message)
    }
  }
}
<\/script>

<template>
  <div>
    <p>{{ message }}</p>
    <button @click="direBonjour">Cliquez-moi</button>
  </div>
</template>`;

const snippetComposition = `<script setup>
import { ref } from 'vue'

const message = ref('Bonjour depuis le Mode Composition')

function direBonjour() {
  alert(message.value)
}
<\/script>

<template>
  <div>
    <p>{{ message }}</p>
    <button @click="direBonjour">Cliquez-moi</button>
  </div>
</template>`;

// --- Variables d'état pour le HTML coloré ---
const codeOptionsHighlighted = ref<string>('');
const codeCompositionHighlighted = ref<string>('');

onMounted(async () => {
  const [optionsCode, compositionCode] = await Promise.all([
    codeToHtml(snippetOptions, { lang: 'vue', theme: 'vitesse-dark' }),
    codeToHtml(snippetComposition, { lang: 'vue', theme: 'vitesse-dark' }),
  ]);

  codeOptionsHighlighted.value = optionsCode;
  codeCompositionHighlighted.value = compositionCode;
});
</script>