<template>
  <div class="container mx-auto p-4 md:p-8 space-y-8">
    <div class="text-center">
      <h1 class="text-4xl md:text-5xl font-extrabold text-primary">
        Les Computed Properties dans Vue.js
      </h1>
      <p class="text-lg md:text-xl text-base-content opacity-75 mt-2 max-w-2xl mx-auto">
        Les Computed Properties sont utilisées pour calculer des valeurs dérivées de façon réactive et optimisée.
      </p>
    </div>

    <!-- Section Théorie -->
    <section id="theory">
      <div class="card bg-base-100 shadow-xl border border-base-300 p-6">
        <h2 class="card-title text-2xl font-bold mb-3">Qu'est-ce qu'une Computed Property ?</h2>
        <p class="text-base-content opacity-80">
          Une Computed Property est une fonction déclarative utilisée pour calculer une valeur basée sur des
          données réactives. Elle est automatiquement mise à jour lorsque les données sous-jacentes changent.
        </p>
        <div class="alert alert-info mt-4 rounded-box shadow-sm">
          <span class="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span class="font-bold">Avantages :</span>
          </span>
          <ul class="list-disc list-inside mt-2 ml-4 space-y-1">
            <li>Mise en cache du résultat tant que les dépendances ne changent pas.</li>
            <li>Idéal pour éviter les calculs répétés ou coûteux dans le template.</li>
          </ul>
        </div>
      </div>
    </section>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <!-- Exemple 1 : Nom Complet -->
      <div class="card bg-base-100 shadow-xl rounded-box border border-base-300">
        <div class="card-body flex flex-col justify-between">
          <div>
            <h2 class="card-title text-2xl font-bold mb-2">Exemple 1 : Nom complet</h2>
            <p class="text-sm text-base-content/70 mb-4">
              Utilisation d'une propriété calculée pour concaténer le prénom et le nom :
            </p>

            <!-- Code Shiki -->
            <div v-if="codeFullNameHighlighted" v-html="codeFullNameHighlighted" class="overflow-x-auto rounded-lg text-sm mb-4"></div>
            <div v-else class="skeleton h-64 w-full rounded-lg mb-4"></div>
          </div>

          <div>
            <span class="text-xs font-bold uppercase tracking-wider text-base-content/50 mb-1 block">Rendu interactif :</span>
            <div class="p-4 bg-base-200/50 rounded-box border border-base-300 space-y-3">
              <label class="form-control w-full">
                <span class="label-text font-semibold mb-1">Prénom :</span>
                <input v-model="firstName" type="text" placeholder="Entrez le prénom..." class="input input-bordered input-sm w-full" />
              </label>
              <label class="form-control w-full">
                <span class="label-text font-semibold mb-1">Nom :</span>
                <input v-model="lastName" type="text" placeholder="Entrez le nom..." class="input input-bordered input-sm w-full" />
              </label>
              <p class="text-sm font-semibold pt-1">
                Nom complet : <span class="badge badge-primary">{{ fullName || 'Non renseigné' }}</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Exemple 2 : Comptage Dynamique -->
      <div class="card bg-base-100 shadow-xl rounded-box border border-base-300">
        <div class="card-body flex flex-col justify-between">
          <div>
            <h2 class="card-title text-2xl font-bold mb-2">Exemple 2 : Comptage de mots</h2>
            <p class="text-sm text-base-content/70 mb-4">
              Calcul dynamique du nombre de mots contenus dans une zone de texte :
            </p>

            <!-- Code Shiki -->
            <div v-if="codeWordCountHighlighted" v-html="codeWordCountHighlighted" class="overflow-x-auto rounded-lg text-sm mb-4"></div>
            <div v-else class="skeleton h-64 w-full rounded-lg mb-4"></div>
          </div>

          <div>
            <span class="text-xs font-bold uppercase tracking-wider text-base-content/50 mb-1 block">Rendu interactif :</span>
            <div class="p-4 bg-base-200/50 rounded-box border border-base-300 space-y-3">
              <label class="form-control w-full">
                <span class="label-text font-semibold mb-1">Entrez une phrase :</span>
                <textarea v-model="sentence" rows="3" placeholder="Tapez votre texte ici..." class="textarea textarea-bordered text-xs w-full"></textarea>
              </label>
              <p class="text-sm font-semibold">
                Nombre de mots : <span class="badge badge-secondary">{{ wordCount }}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div class="text-center">
      <p class="text-sm opacity-75">
        Pour plus d'informations, consulte la
        <a href="https://vuejs.org/guide/essentials/computed.html" class="link link-hover link-primary font-bold" target="_blank">
          documentation officielle de Vue.js
        </a>.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { codeToHtml } from 'shiki';

// --- Données réactives & Propriétés calculées ---
const firstName = ref<string>('');
const lastName = ref<string>('');
const fullName = computed<string>(() => {
  const fn = firstName.value.trim();
  const ln = lastName.value.trim();
  return fn || ln ? `${fn} ${ln}`.trim() : '';
});

const sentence = ref<string>('');
const wordCount = computed<number>(() => {
  const trimmed = sentence.value.trim();
  return trimmed ? trimmed.split(/\s+/).length : 0;
});

// --- Snippets bruts pour Shiki ---
const snippetFullName = `<template>
  <div>
    <input v-model="firstName" placeholder="Prénom" />
    <input v-model="lastName" placeholder="Nom" />

    <p>Nom complet : {{ fullName }}</p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const firstName = ref('');
const lastName = ref('');

const fullName = computed(() => \`\${firstName.value} \${lastName.value}\`);
<\/script>`;

const snippetWordCount = `<template>
  <div>
    <textarea v-model="sentence" placeholder="Tapez une phrase..."></textarea>
    <p>Nombre de mots : {{ wordCount }}</p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const sentence = ref('');

const wordCount = computed(() => {
  const trimmed = sentence.value.trim();
  return trimmed ? trimmed.split(/\\s+/).length : 0;
});
<\/script>`;

// --- Variables d'état pour le HTML coloré ---
const codeFullNameHighlighted = ref<string>('');
const codeWordCountHighlighted = ref<string>('');

onMounted(async () => {
  const [fullNameCode, wordCountCode] = await Promise.all([
    codeToHtml(snippetFullName, { lang: 'vue', theme: 'vitesse-dark' }),
    codeToHtml(snippetWordCount, { lang: 'vue', theme: 'vitesse-dark' }),
  ]);

  codeFullNameHighlighted.value = fullNameCode;
  codeWordCountHighlighted.value = wordCountCode;
});
</script>