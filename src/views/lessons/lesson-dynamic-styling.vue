<template>
  <div class="container mx-auto p-4 md:p-8 space-y-8">
    <div class="text-center">
      <h1 class="text-4xl md:text-5xl font-extrabold text-primary">
        Dynamic Styling avec Vue.js
      </h1>
      <p class="text-lg md:text-xl text-base-content opacity-75 mt-2 max-w-2xl mx-auto">
        Apprenez à utiliser <code class="text-secondary">v-bind</code> pour appliquer dynamiquement des styles en ligne et des classes CSS.
      </p>
    </div>

    <!-- Section Théorie -->
    <section id="theory">
      <div class="card bg-base-100 shadow-xl border border-base-300 p-6">
        <h2 class="card-title text-2xl font-bold mb-3">Qu'est-ce que le Dynamic Styling ?</h2>
        <p class="text-base-content opacity-80">
          Vue.js permet de modifier l'apparence des éléments HTML en liant réactivement l'attribut <code class="text-secondary">style</code> ou <code class="text-secondary">class</code> à des données de votre composant.
        </p>
        <div class="alert alert-info mt-4 rounded-box shadow-sm">
          <span class="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span class="font-bold">Principaux usages :</span>
          </span>
          <ul class="list-disc list-inside mt-2 ml-4 space-y-1">
            <li>Ajuster la mise en forme (couleur, taille) selon l'état réactif.</li>
            <li>Appliquer conditionnellement des classes CSS (ex. : succès, erreur, actif).</li>
            <li>Combiner plusieurs objets ou tableaux de styles et classes.</li>
          </ul>
        </div>
      </div>
    </section>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <!-- Exemple 1 : Styles en ligne dynamiques -->
      <div class="card bg-base-100 shadow-xl rounded-box border border-base-300">
        <div class="card-body flex flex-col justify-between">
          <div>
            <h2 class="card-title text-2xl font-bold mb-2">Exemple 1 : Lier l'attribut <code class="text-secondary">:style</code></h2>
            <p class="text-sm text-base-content/70 mb-4">
              Application d'un objet de styles CSS géré réactivement :
            </p>

            <!-- Code Shiki -->
            <div v-if="codeStyleHighlighted" v-html="codeStyleHighlighted" class="overflow-x-auto rounded-lg text-sm mb-4"></div>
            <div v-else class="skeleton h-64 w-full rounded-lg mb-4"></div>
          </div>

          <div>
            <span class="text-xs font-bold uppercase tracking-wider text-base-content/50 mb-1 block">Rendu interactif :</span>
            <div class="p-4 bg-base-200/50 rounded-box border border-base-300 text-center space-y-3">
              <p :style="dynamicStyle" class="text-lg font-bold transition-all duration-300">
                Texte stylé dynamiquement
              </p>
              <button class="btn btn-primary btn-sm rounded-box" @click="changeColor">
                Changer la couleur
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Exemple 2 : Classes CSS dynamiques -->
      <div class="card bg-base-100 shadow-xl rounded-box border border-base-300">
        <div class="card-body flex flex-col justify-between">
          <div>
            <h2 class="card-title text-2xl font-bold mb-2">Exemple 2 : Lier l'attribut <code class="text-secondary">:class</code></h2>
            <p class="text-sm text-base-content/70 mb-4">
              Bascule de classes CSS à l'aide d'une condition booléenne :
            </p>

            <!-- Code Shiki -->
            <div v-if="codeClassHighlighted" v-html="codeClassHighlighted" class="overflow-x-auto rounded-lg text-sm mb-4"></div>
            <div v-else class="skeleton h-64 w-full rounded-lg mb-4"></div>
          </div>

          <div>
            <span class="text-xs font-bold uppercase tracking-wider text-base-content/50 mb-1 block">Rendu interactif :</span>
            <div class="p-4 bg-base-200/50 rounded-box border border-base-300 text-center space-y-3">
              <p :class="['font-bold', 'text-xl', 'transition-colors', 'duration-300', { 'text-success': isActive, 'text-error': !isActive }]">
                Statut : {{ isActive ? 'Actif' : 'Inactif' }}
              </p>
              <button class="btn btn-secondary btn-sm rounded-box" @click="toggleStatus">
                Changer le statut
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div class="text-center">
      <p class="text-sm opacity-75">
        Pour en savoir plus sur le dynamic styling, consulte la
        <a href="https://vuejs.org/guide/essentials/class-and-style.html" class="link link-hover link-primary font-bold" target="_blank">
          documentation officielle de Vue.js
        </a>.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { CSSProperties } from 'vue';
import { codeToHtml } from 'shiki';

// --- Exemple 1 : Dynamic Style ---
const dynamicStyle = ref<CSSProperties>({
  color: 'blue',
  fontSize: '18px',
});

function changeColor(): void {
  dynamicStyle.value.color = dynamicStyle.value.color === 'blue' ? 'red' : 'blue';
}

// --- Exemple 2 : Dynamic Class ---
const isActive = ref<boolean>(true);

function toggleStatus(): void {
  isActive.value = !isActive.value;
}

// --- Snippets bruts pour Shiki ---
const snippetStyle = `<template>
  <div>
    <p :style="dynamicStyle">Texte stylé dynamiquement</p>
    <button @click="changeColor">Changer la couleur</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const dynamicStyle = ref({
  color: 'blue',
  fontSize: '18px',
});

function changeColor() {
  dynamicStyle.value.color =
    dynamicStyle.value.color === 'blue' ? 'red' : 'blue';
}
<\/script>`;

const snippetClass = `<template>
  <div>
    <p :class="{ 'text-success': isActive, 'text-error': !isActive }">
      Statut : {{ isActive ? 'Actif' : 'Inactif' }}
    </p>
    <button @click="toggleStatus">Changer le statut</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isActive = ref(true);

function toggleStatus() {
  isActive.value = !isActive.value;
}
<\/script>`;

// --- Variables d'état pour le HTML coloré ---
const codeStyleHighlighted = ref<string>('');
const codeClassHighlighted = ref<string>('');

onMounted(async () => {
  const [styleCode, classCode] = await Promise.all([
    codeToHtml(snippetStyle, { lang: 'vue', theme: 'vitesse-dark' }),
    codeToHtml(snippetClass, { lang: 'vue', theme: 'vitesse-dark' }),
  ]);

  codeStyleHighlighted.value = styleCode;
  codeClassHighlighted.value = classCode;
});
</script>