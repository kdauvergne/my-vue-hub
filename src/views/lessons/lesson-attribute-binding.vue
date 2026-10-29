<template>
  <div class="container mx-auto p-4 md:p-8 space-y-8">
    <div class="text-center">
      <h1 class="text-4xl md:text-5xl font-extrabold text-primary">
        Apprendre la directive <code class="text-secondary">v-bind</code>
      </h1>
      <p class="text-lg md:text-xl text-base-content opacity-75 mt-2 max-w-2xl mx-auto">
        La directive <code class="text-secondary">v-bind</code> permet de lier dynamiquement des attributs HTML à des données Vue.
      </p>
    </div>

    <!-- Section Définition -->
    <div class="card bg-base-100 shadow-xl border border-base-300">
      <div class="card-body">
        <h2 class="card-title text-2xl font-bold mb-2">
          Qu'est-ce que <code class="text-secondary">v-bind</code> ?
        </h2>
        <p>
          La directive <code class="text-secondary">v-bind</code> lie dynamiquement un état réactif JavaScript à un attribut HTML (ex: <code class="text-accent">href</code>, <code class="text-accent">src</code>, <code class="text-accent">disabled</code>, <code class="text-accent">class</code>).
        </p>
        <p>
          La syntaxe raccourcie de <code class="text-secondary">v-bind</code> est simplement le caractère <code class="text-warning font-bold">:</code> devant l'attribut concerné.
        </p>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <!-- Exemple 1 : Lien dynamique -->
      <div class="card bg-base-100 shadow-xl rounded-box border border-base-300">
        <div class="card-body flex flex-col justify-between">
          <div>
            <h2 class="card-title text-2xl font-bold mb-2">Exemple 1 : Lier un lien</h2>
            <p class="mb-4 text-sm text-base-content/70">
              Liaison dynamique d'une URL sur l'attribut <code class="text-secondary">href</code> :
            </p>

            <!-- Code Shiki -->
            <div v-if="codeLinkHighlighted" v-html="codeLinkHighlighted" class="overflow-x-auto rounded-lg text-sm mb-4"></div>
            <div v-else class="skeleton h-44 w-full rounded-lg mb-4"></div>
          </div>

          <div>
            <span class="text-xs font-bold uppercase tracking-wider text-base-content/50 mb-1 block">Résultat en direct :</span>
            <div class="p-4 border rounded-box w-full text-center bg-base-200/50">
              <p class="text-xs text-base-content/70 mb-2">
                URL actuelle : <strong class="font-mono">{{ websiteUrl }}</strong>
              </p>
              <a :href="websiteUrl" target="_blank" class="btn btn-primary btn-sm rounded-box">
                Visiter le site
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Exemple 2 : Attribut d'image -->
      <div class="card bg-base-100 shadow-xl rounded-box border border-base-300">
        <div class="card-body flex flex-col justify-between">
          <div>
            <h2 class="card-title text-2xl font-bold mb-2">Exemple 2 : Lier une image</h2>
            <p class="mb-4 text-sm text-base-content/70">
              Modification dynamique de la source <code class="text-secondary">src</code> d'une image :
            </p>

            <!-- Code Shiki -->
            <div v-if="codeImageHighlighted" v-html="codeImageHighlighted" class="overflow-x-auto rounded-lg text-sm mb-4"></div>
            <div v-else class="skeleton h-44 w-full rounded-lg mb-4"></div>
          </div>

          <div>
            <span class="text-xs font-bold uppercase tracking-wider text-base-content/50 mb-1 block">Rendu interactif :</span>
            <div class="text-center w-full p-4 border rounded-box bg-base-200/50">
              <img
                :src="imageUrl"
                alt="Exemple d'image"
                class="w-full h-40 object-cover rounded-box mb-3 shadow-md"
              />
              <button class="btn btn-secondary btn-sm rounded-box" @click="changeImage">
                Changer l'image
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div class="text-center">
      <p class="text-sm md:text-base text-base-content opacity-50">
        Consultez la
        <a
          href="https://vuejs.org/guide/essentials/template-syntax.html#v-bind"
          class="link link-hover text-primary font-bold"
          target="_blank"
        >
          documentation officielle de Vue.js
        </a>
        pour plus d'informations.
      </p>
    </div>
  </div>
</template>

<script setup lang="js">
import { ref, onMounted } from 'vue';
import { codeToHtml } from 'shiki';

// --- Données pour la démonstration en direct ---
const websiteUrl = ref('https://vuejs.org');
const imageUrl = ref('https://picsum.photos/400/300');

function changeImage() {
  imageUrl.value =
    imageUrl.value === 'https://picsum.photos/400/300'
      ? 'https://picsum.photos/400/300?random=1'
      : 'https://picsum.photos/400/300';
}

// --- Snippets bruts pour Shiki ---
const snippetLink = `<template>
  <!-- Syntaxe complète -->
  <a v-bind:href="websiteUrl">Visiter le site</a>

  <!-- Syntaxe raccourcie -->
  <a :href="websiteUrl">Visiter le site</a>
</template>

<script setup>
import { ref } from 'vue';

const websiteUrl = ref('https://vuejs.org');
<\/script>`;

const snippetImage = `<template>
  <div>
    <img :src="imageUrl" alt="Image dynamique" />
    <button @click="changeImage">Changer l'image</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const imageUrl = ref('https://picsum.photos/400/300');

function changeImage() {
  imageUrl.value = 'https://picsum.photos/400/300?random=1';
}
<\/script>`;

// --- Variables d'état pour le HTML coloré ---
const codeLinkHighlighted = ref('');
const codeImageHighlighted = ref('');

onMounted(async () => {
  const [linkCode, imageCode] = await Promise.all([
    codeToHtml(snippetLink, { lang: 'vue', theme: 'vitesse-dark' }),
    codeToHtml(snippetImage, { lang: 'vue', theme: 'vitesse-dark' }),
  ]);

  codeLinkHighlighted.value = linkCode;
  codeImageHighlighted.value = imageCode;
});
</script>