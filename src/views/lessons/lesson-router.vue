<template>
  <div class="container mx-auto p-4 md:p-8 space-y-8">
    <!-- En-tête -->
    <div class="text-center">
      <h1 class="text-4xl md:text-5xl font-extrabold text-primary">
        Navigation avec Vue Router
      </h1>
      <p class="text-lg md:text-xl text-base-content opacity-75 mt-2 max-w-2xl mx-auto">
        Vue Router est le routeur officiel de Vue.js. Il permet d'associer des composants aux routes d'une application monopage (SPA).
      </p>
    </div>

    <!-- Section Théorie : Concepts fondamentaux -->
    <section id="concepts">
      <div class="card bg-base-100 shadow-xl border border-base-300 p-6 space-y-4">
        <h2 class="card-title text-2xl font-bold">Concepts fondamentaux</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="alert alert-info shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <div>
              <h3 class="font-bold">&lt;RouterLink&gt;</h3>
              <p class="text-xs">Composant déclaratif pour créer des liens de navigation sans recharger la page.</p>
            </div>
          </div>

          <div class="alert alert-info shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <div>
              <h3 class="font-bold">&lt;RouterView&gt;</h3>
              <p class="text-xs">Emplacement dynamique où est rendu le composant correspondant à la route active.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 1 : Configuration des Routes & Méta-données -->
    <section id="route-config">
      <div class="card bg-base-100 shadow-xl border border-base-300 p-6 space-y-4">
        <h2 class="card-title text-2xl font-bold">1. Configuration des Routes & Méta-données (<code class="text-secondary">meta</code>)</h2>
        <p class="text-sm text-base-content/80">
          Chaque route associe un chemin d'URL à un composant. Le champ <code class="text-secondary">meta</code> permet d'attacher des données personnalisées (ex&nbsp;: titre de la page, nécessiter une connexion pour les <em>navigation guards</em>).
        </p>

        <!-- Code Shiki -->
        <div v-if="codeConfigHighlighted" v-html="codeConfigHighlighted" class="overflow-x-auto rounded-lg text-sm"></div>
        <div v-else class="skeleton h-56 w-full rounded-lg"></div>
      </div>
    </section>

    <!-- Section 2 : Chargement des composants (Classique vs Lazy Loading) -->
    <section id="loading-modes">
      <div class="card bg-base-100 shadow-xl border border-base-300 p-6 space-y-4">
        <h2 class="card-title text-2xl font-bold">2. Chargement des composants&nbsp;: Classique vs Lazy Loading</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div class="p-4 rounded-box bg-base-200/60 border border-base-300 space-y-2">
            <h3 class="font-bold text-base text-warning">📦 Chargement Classique (Statique)</h3>
            <p class="text-base-content/80">
              Le composant est importé directement en haut du fichier avec <code class="text-xs font-bold">import HomeView from ...</code>. Il est inclus directement dans le bundle JS principal au démarrage (<em>Eager Loading</em>). À réserver aux pages principales (ex&nbsp;: la page d'accueil).
            </p>
          </div>

          <div class="p-4 rounded-box bg-base-200/60 border border-base-300 space-y-2">
            <h3 class="font-bold text-base text-success">⚡ Lazy Loading (Import dynamique)</h3>
            <p class="text-base-content/80">
              Le composant est chargé uniquement lorsque l'utilisateur accède à la route grâce à une fonction d'import dynamique&nbsp;: <code class="text-xs font-bold">() => import(...)</code>. Vite/Webpack découpe alors le code (<em>Code Splitting</em>), ce qui réduit fortement le temps de chargement initial.
            </p>
          </div>
        </div>

        <!-- Code Shiki -->
        <div class="pt-2">
          <span class="text-xs font-bold uppercase tracking-wider text-base-content/50 mb-2 block">Comparaison des deux méthodes d'import dans le routeur&nbsp;:</span>
          <div v-if="codeLoadingHighlighted" v-html="codeLoadingHighlighted" class="overflow-x-auto rounded-lg text-sm"></div>
          <div v-else class="skeleton h-56 w-full rounded-lg"></div>
        </div>
      </div>
    </section>

    <!-- Section 3 : Navigation Programmatique -->
    <section id="programmatic-nav">
      <div class="card bg-base-100 shadow-xl border border-base-300 p-6 space-y-4">
        <h2 class="card-title text-2xl font-bold">3. Navigation Programmatique avec <code class="text-secondary">useRouter()</code></h2>
        <p class="text-sm text-base-content/80">
          Outre <code class="text-secondary">&lt;RouterLink&gt;</code>, il est possible de naviguer par le code suite à une action (soumission de formulaire, validation, etc.) grâce au hook <code class="text-secondary">useRouter()</code>.
        </p>

        <!-- Code Shiki -->
        <div v-if="codeProgrammaticHighlighted" v-html="codeProgrammaticHighlighted" class="overflow-x-auto rounded-lg text-sm"></div>
        <div v-else class="skeleton h-48 w-full rounded-lg"></div>
      </div>
    </section>

    <!-- Section 4 : Transmission de paramètres (Params vs Props) -->
    <section id="params-props">
      <div class="card bg-base-100 shadow-xl border border-base-300 p-6 space-y-4">
        <h2 class="card-title text-2xl font-bold">4. Paramètres dynamiques&nbsp;: <code class="text-secondary">params</code> vs <code class="text-secondary">props</code></h2>
        <p class="text-sm text-base-content/80">
          En activant <code class="text-secondary">props: true</code> dans la définition de la route, Vue Router injecte automatiquement les paramètres d'URL directement sous forme de <strong>props</strong> dans le composant cible. Cela évite le couplage fort avec <code class="text-secondary">useRoute()</code>.
        </p>

        <!-- Code Shiki -->
        <div v-if="codePropsHighlighted" v-html="codePropsHighlighted" class="overflow-x-auto rounded-lg text-sm"></div>
        <div v-else class="skeleton h-52 w-full rounded-lg"></div>
      </div>
    </section>

    <!-- Section 5 : Démonstration dynamique -->
    <section id="demo">
      <div class="card bg-base-100 shadow-xl border border-base-300">
        <div class="card-body">
          <h2 class="card-title text-2xl font-bold mb-2">Exemple Interactif</h2>
          <p class="text-sm text-base-content/70 mb-4">
            Navigation hybride (déclarative avec <code class="text-secondary">&lt;RouterLink&gt;</code> et programmatique via une fonction)&nbsp;:
          </p>

          <div class="p-6 bg-base-200/50 rounded-box border border-base-300 space-y-4">
            <ul class="space-y-3">
              <li 
                v-for="item in items" 
                :key="item.id" 
                class="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-base-100 rounded-box border border-base-300 gap-2"
              >
                <span class="font-bold text-sm">{{ item.name }}</span>

                <div class="flex gap-2">
                  <!-- Option A : RouterLink -->
                  <router-link 
                    :to="{ name: 'Details', params: { id: item.id, itemName: item.name } }" 
                    class="btn btn-xs btn-outline btn-info"
                  >
                    🔗 Lien déclaratif
                  </router-link>

                  <!-- Option B : Navigation programmatique -->
                  <button 
                    class="btn btn-xs btn-primary" 
                    @click="navigateToDetails(item)"
                  >
                    ⚡ Via useRouter()
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <div class="text-center">
      <p class="text-sm opacity-75">
        Pour approfondir, consulte la
        <a href="https://router.vuejs.org/" class="link link-hover link-primary font-bold" target="_blank">
          documentation officielle de Vue Router
        </a>.
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { codeToHtml } from 'shiki';

const router = useRouter();

const items = ref([
  { id: 1, name: 'Steven-Vandamme' },
  { id: 2, name: 'Jean-Luc Godard' },
  { id: 3, name: 'BicVeleda' },
  { id: 44, name: 'Savage Henry' }
]);

// Navigation programmatique incluant les deux paramètres
function navigateToDetails(item) {
  router.push({ 
    name: 'Details', 
    params: { 
      id: item.id.toString(), 
      itemName: item.name 
    } 
  });
}

// --- Snippets bruts JS pour Shiki ---
const snippetConfig = `// router/index.js
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/details/:id/:itemName',
    name: 'Details',
    component: () => import('../views/DetailsView.vue'),
    // Mode props : injecte les params comme props du composant
    props: true,
    // Méta-données personnalisées
    meta: {
      requiresAuth: true,
      title: 'Détails du profil'
    }
  }
];`;

const snippetLoading = `// router/index.js
// 1️⃣ CHARGEMENT CLASSIQUE (Statique) :
// Téléchargé immédiatement dès le lancement de l'application
import HomeView from '../views/HomeView.vue';

// 2️⃣ LAZY LOADING (Import dynamique - Recommandé) :
// Fichier JS/CSS séparé, téléchargé uniquement au clic / navigation
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView // Eager Loading
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/AboutView.vue') // Lazy Loading
  }
];`;

const snippetProgrammatic = `<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function handleNavigation(item) {
  // Navigation vers une route nommée avec paramètres
  router.push({ 
    name: 'Details', 
    params: { 
      id: item.id, 
      itemName: item.name 
    } 
  });
}
<\/script>`;

const snippetProps = `<!-- DetailsView.vue (Composant cible) -->
<script setup>
// ✅ RECOMMANDÉ : Réception propre via les props (avec props: true dans la route)
defineProps({
  id: {
    type: String,
    required: true
  },
  itemName: {
    type: String,
    required: true
  }
});
<\/script>

<template>
  <div>
    <h2>ID reçu : {{ id }}</h2>
    <p>Nom : {{ itemName }}</p>
  </div>
</template>`;

// --- Variables d'état pour le HTML coloré ---
const codeConfigHighlighted = ref('');
const codeLoadingHighlighted = ref('');
const codeProgrammaticHighlighted = ref('');
const codePropsHighlighted = ref('');

onMounted(async () => {
  const [configCode, loadingCode, programmaticCode, propsCode] = await Promise.all([
    codeToHtml(snippetConfig, { lang: 'javascript', theme: 'vitesse-dark' }),
    codeToHtml(snippetLoading, { lang: 'javascript', theme: 'vitesse-dark' }),
    codeToHtml(snippetProgrammatic, { lang: 'vue', theme: 'vitesse-dark' }),
    codeToHtml(snippetProps, { lang: 'vue', theme: 'vitesse-dark' })
  ]);

  codeConfigHighlighted.value = configCode;
  codeLoadingHighlighted.value = loadingCode;
  codeProgrammaticHighlighted.value = programmaticCode;
  codePropsHighlighted.value = propsCode;
});
</script>