<template>
  <div class="container mx-auto p-4 md:p-8 space-y-8">
    <div class="text-center">
      <h1 class="text-4xl md:text-5xl font-extrabold text-primary">
        Comprendre la Directive <code class="text-secondary">v-model</code>
      </h1>
      <p class="text-lg md:text-xl text-base-content opacity-75 mt-2 max-w-2xl mx-auto">
        La directive <code class="text-secondary">v-model</code> crée une liaison bidirectionnelle entre les données du composant et les champs de saisie.
      </p>
    </div>

    <!-- Section Théorie -->
    <div class="card bg-base-100 shadow-xl border border-base-300">
      <div class="card-body">
        <h2 class="card-title text-2xl font-bold mb-2">Concepts Théoriques</h2>
        <p>
          Vue.js s'appuie sur le patron architectural <strong>MVVM</strong> (Model-View-ViewModel) :
        </p>
        <ul class="list-inside list-disc space-y-1">
          <li><strong>Model</strong> : Les données réactives de ton application.</li>
          <li><strong>View</strong> : Le DOM et l'interface utilisateur.</li>
          <li><strong>ViewModel</strong> : La couche intermédiaire qui relie automatiquement les données au DOM.</li>
        </ul>
        <div class="alert alert-info mt-4 shadow-sm">
          <span>
            <strong>Two-Way Data Binding :</strong> Toute modification dans un champ met automatiquement à jour l'état réactif, et inversement.
          </span>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <!-- Exemple de Base -->
      <div class="card bg-base-100 shadow-xl rounded-box border border-base-300">
        <div class="card-body flex flex-col justify-between">
          <div>
            <h2 class="card-title text-2xl font-bold mb-2">Exemple de Base</h2>
            <p class="mb-4 text-sm text-base-content/70">
              Liaison simple entre un champ texte et une variable réactive :
            </p>

            <!-- Code Shiki -->
            <div v-if="codeBasicHighlighted" v-html="codeBasicHighlighted" class="overflow-x-auto rounded-lg text-sm mb-4"></div>
            <div v-else class="skeleton h-44 w-full rounded-lg mb-4"></div>
          </div>

          <div>
            <span class="text-xs font-bold uppercase tracking-wider text-base-content/50 mb-1 block">Rendu interactif :</span>
            <div class="form-control w-full p-4 border rounded-box bg-base-200/50">
              <label class="label p-0 mb-1">
                <span class="label-text font-semibold">Nom d'utilisateur :</span>
              </label>
              <input type="text" v-model="username" class="input input-bordered input-sm w-full" placeholder="Tapez votre nom..." />
              <p class="mt-3 text-sm font-semibold">
                Bonjour, <span class="text-primary font-bold">{{ username || 'inconnu' }}</span> !
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Exemple Dynamique -->
      <div class="card bg-base-100 shadow-xl rounded-box border border-base-300">
        <div class="card-body flex flex-col justify-between">
          <div>
            <h2 class="card-title text-2xl font-bold mb-2">Exemple Multi-Champs</h2>
            <p class="mb-4 text-sm text-base-content/70">
              Synchronisation de plusieurs entrées avec le modificateur <code class="text-secondary">.number</code> :
            </p>

            <!-- Code Shiki -->
            <div v-if="codeDynamicHighlighted" v-html="codeDynamicHighlighted" class="overflow-x-auto rounded-lg text-sm mb-4"></div>
            <div v-else class="skeleton h-44 w-full rounded-lg mb-4"></div>
          </div>

          <div>
            <span class="text-xs font-bold uppercase tracking-wider text-base-content/50 mb-1 block">Rendu interactif :</span>
            <div class="form-control w-full p-4 border rounded-box bg-base-200/50 space-y-2">
              <div>
                <label class="label p-0 mb-1"><span class="label-text font-semibold">Âge :</span></label>
                <input type="number" v-model.number="age" class="input input-bordered input-sm w-full" />
              </div>
              <div>
                <label class="label p-0 mb-1"><span class="label-text font-semibold">Couleur préférée :</span></label>
                <input type="text" v-model="color" class="input input-bordered input-sm w-full" />
              </div>
              <p class="mt-2 text-sm font-semibold pt-1">
                Tu as <span class="text-primary font-bold">{{ age }}</span> ans et ta couleur préférée est <span class="text-primary font-bold">{{ color }}</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div class="text-center">
      <p class="text-sm md:text-base text-base-content opacity-50">
        Pour plus d'informations sur <code class="text-secondary">v-model</code>, consulte la
        <a href="https://vuejs.org/guide/essentials/forms.html#v-model" class="link link-hover text-primary font-bold" target="_blank">
          documentation officielle de Vue.js
        </a>.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { codeToHtml } from 'shiki';

// --- Données réactives pour la démonstration ---
const username = ref<string>('azertyuiop');
const age = ref<number>(9);
const color = ref<string>('bleu');

// --- Extraits de code bruts pour Shiki ---
const snippetBasic = `<template>
  <div>
    <input v-model="username" placeholder="Tapez votre nom..." />
    <p>Bonjour, {{ username }} !</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const username = ref('azertyuiop');
<\/script>`;

const snippetDynamic = `<template>
  <div>
    <input type="number" v-model.number="age" />
    <input type="text" v-model="color" />

    <p>Tu as {{ age }} ans et ta couleur préférée est {{ color }}.</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const age = ref(9);
const color = ref('bleu');
<\/script>`;

// --- Variables d'état pour le HTML coloré ---
const codeBasicHighlighted = ref<string>('');
const codeDynamicHighlighted = ref<string>('');

onMounted(async () => {
  const [basic, dynamic] = await Promise.all([
    codeToHtml(snippetBasic, { lang: 'vue', theme: 'vitesse-dark' }),
    codeToHtml(snippetDynamic, { lang: 'vue', theme: 'vitesse-dark' }),
  ]);

  codeBasicHighlighted.value = basic;
  codeDynamicHighlighted.value = dynamic;
});
</script>