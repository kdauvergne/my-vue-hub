<template>
  <div class="container mx-auto p-4 md:p-8 space-y-8">
    <div class="text-center">
      <h1 class="text-4xl md:text-5xl font-extrabold text-primary">
        Les Watchers dans Vue.js
      </h1>
      <p class="text-lg md:text-xl text-base-content opacity-75 mt-2 max-w-2xl mx-auto">
        Les watchers permettent d'observer et de réagir aux changements des données réactives, parfaits pour déclencher des effets secondaires ou des traitements asynchrones.
      </p>
    </div>

    <!-- Section Théorie -->
    <section id="theory">
      <div class="card bg-base-100 shadow-xl border border-base-300 p-6">
        <h2 class="card-title text-2xl font-bold mb-3">Qu'est-ce qu'un Watcher ?</h2>
        <p class="text-base-content opacity-80">
          Un watcher est une fonction déclenchée automatiquement lorsqu'une donnée réactive ou une propriété calculée spécifique change de valeur.
        </p>
        <div class="alert alert-info mt-4 rounded-box shadow-sm">
          <span class="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span class="font-bold">Cas d'usage courants :</span>
          </span>
          <ul class="list-disc list-inside mt-2 ml-4 space-y-1">
            <li>Surveiller une saisie pour effectuer des requêtes API (ex : autocomplétion).</li>
            <li>Exécuter des validations complexes en temps réel.</li>
            <li>Sauvegarder automatiquement un état dans le <code class="font-bold">localStorage</code>.</li>
          </ul>
        </div>
      </div>
    </section>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <!-- Exemple 1 : Surveillance d'un compteur -->
      <div class="card bg-base-100 shadow-xl rounded-box border border-base-300">
        <div class="card-body flex flex-col justify-between">
          <div>
            <h2 class="card-title text-2xl font-bold mb-2">Exemple 1 : Seuil d'un compteur</h2>
            <p class="text-sm text-base-content/70 mb-4">
              Détection du dépassement d'un seuil maximal via <code class="text-secondary">watch</code> :
            </p>

            <!-- Code Shiki -->
            <div v-if="codeCounterHighlighted" v-html="codeCounterHighlighted" class="overflow-x-auto rounded-lg text-sm mb-4"></div>
            <div v-else class="skeleton h-64 w-full rounded-lg mb-4"></div>
          </div>

          <div>
            <span class="text-xs font-bold uppercase tracking-wider text-base-content/50 mb-1 block">Rendu interactif :</span>
            <div class="p-4 bg-base-200/50 rounded-box border border-base-300 text-center space-y-3">
              <p class="text-sm font-semibold">
                Compteur : <span class="badge badge-primary badge-lg font-mono">{{ counter }}</span>
              </p>
              <button class="btn btn-primary btn-sm rounded-box" @click="increment">
                Incrémenter
              </button>
              <p v-if="limitReached" class="text-error text-xs font-bold animate-pulse">
                ⚠️ Limite atteinte (10 ou plus) !
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Exemple 2 : Validation d'une chaîne -->
      <div class="card bg-base-100 shadow-xl rounded-box border border-base-300">
        <div class="card-body flex flex-col justify-between">
          <div>
            <h2 class="card-title text-2xl font-bold mb-2">Exemple 2 : Validation en direct</h2>
            <p class="text-sm text-base-content/70 mb-4">
              Contrôle de la longueur minimale d'une chaîne de caractères :
            </p>

            <!-- Code Shiki -->
            <div v-if="codeUsernameHighlighted" v-html="codeUsernameHighlighted" class="overflow-x-auto rounded-lg text-sm mb-4"></div>
            <div v-else class="skeleton h-64 w-full rounded-lg mb-4"></div>
          </div>

          <div>
            <span class="text-xs font-bold uppercase tracking-wider text-base-content/50 mb-1 block">Rendu interactif :</span>
            <div class="p-4 bg-base-200/50 rounded-box border border-base-300 space-y-3">
              <label class="form-control w-full">
                <span class="label-text font-semibold mb-1">Nom d'utilisateur :</span>
                <input
                  v-model="username"
                  type="text"
                  placeholder="Tapez au moins 3 caractères..."
                  class="input input-bordered input-sm w-full"
                />
              </label>
              <p v-if="errorMessage" class="text-error text-xs font-bold">
                {{ errorMessage }}
              </p>
              <p v-else-if="username.length >= 3" class="text-success text-xs font-bold">
                ✓ Nom d'utilisateur valide !
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div class="text-center">
      <p class="text-sm opacity-75">
        Pour en savoir plus sur les watchers, consulte la
        <a href="https://vuejs.org/guide/essentials/watchers.html" class="link link-hover link-primary font-bold" target="_blank">
          documentation officielle de Vue.js
        </a>.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';
import { codeToHtml } from 'shiki';

// --- Exemple 1 : Compteur ---
const counter = ref<number>(0);
const limitReached = ref<boolean>(false);

function increment(): void {
  counter.value++;
}

watch(counter, (newVal) => {
  limitReached.value = newVal >= 10;
});

// --- Exemple 2 : Validation ---
const username = ref<string>('');
const errorMessage = ref<string>('');

watch(username, (newVal) => {
  if (newVal.length === 0) {
    errorMessage.value = '';
  } else if (newVal.length < 3) {
    errorMessage.value = "Le nom d'utilisateur doit contenir au moins 3 caractères.";
  } else {
    errorMessage.value = '';
  }
});

// --- Snippets bruts pour Shiki ---
const snippetCounter = `<template>
  <div>
    <p>Compteur : {{ counter }}</p>
    <button @click="increment">Incrémenter</button>
    <p v-if="limitReached">⚠️ Limite atteinte !</p>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const counter = ref(0);
const limitReached = ref(false);

function increment() {
  counter.value++;
}

watch(counter, (newVal) => {
  limitReached.value = newVal >= 10;
});
<\/script>`;

const snippetUsername = `<template>
  <div>
    <label>Nom d'utilisateur :</label>
    <input v-model="username" />
    <p v-if="errorMessage">{{ errorMessage }}</p>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const username = ref('');
const errorMessage = ref('');

watch(username, (newVal) => {
  errorMessage.value = newVal.length < 3
    ? "Le nom d'utilisateur doit contenir au moins 3 caractères."
    : "";
});
<\/script>`;

// --- Variables d'état pour le HTML coloré ---
const codeCounterHighlighted = ref<string>('');
const codeUsernameHighlighted = ref<string>('');

onMounted(async () => {
  const [counterCode, usernameCode] = await Promise.all([
    codeToHtml(snippetCounter, { lang: 'vue', theme: 'vitesse-dark' }),
    codeToHtml(snippetUsername, { lang: 'vue', theme: 'vitesse-dark' }),
  ]);

  codeCounterHighlighted.value = counterCode;
  codeUsernameHighlighted.value = usernameCode;
});
</script>