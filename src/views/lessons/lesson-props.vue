<template>
  <div class="container mx-auto p-4 md:p-8 space-y-8">
    <div class="text-center">
      <h1 class="text-4xl md:text-5xl font-extrabold text-primary">
        Les Props en Vue.js
      </h1>
      <p class="text-lg md:text-xl text-base-content opacity-75 mt-2 max-w-2xl mx-auto">
        Les <strong class="text-primary">props</strong> permettent de transmettre des données de manière unilatérale d'un composant parent vers un composant enfant.
      </p>
    </div>

    <!-- Section Théorie : Définition & Règle d'or -->
    <section id="definition">
      <div class="card bg-base-100 shadow-xl border border-base-300 p-6">
        <h2 class="card-title text-2xl font-bold mb-3">Qu'est-ce qu'une prop&nbsp;?</h2>
        <p class="text-base-content opacity-80">
          Une prop est un attribut personnalisé déclaré dans le composant enfant via <code class="text-secondary">defineProps()</code>. Le composant parent lui passe des valeurs réactives ou statiques.
        </p>
        <div class="alert alert-info mt-4 rounded-box shadow-sm">
          <span class="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span class="font-bold">Règle d'or (One-Way Data Flow)&nbsp;:</span>
          </span>
          <p class="mt-1 text-sm">
            Les props sont en <strong>lecture seule</strong> pour l'enfant. L'enfant ne doit jamais modifier directement une prop reçue du parent.
          </p>
        </div>
      </div>
    </section>

    <!-- Section Théorie : Modes de déclaration (Tableau vs Objet) -->
    <section id="declaration-modes">
      <div class="card bg-base-100 shadow-xl border border-base-300 p-6 space-y-4">
        <h2 class="card-title text-2xl font-bold">Comment déclarer les props dans l'enfant&nbsp;?</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div class="p-4 rounded-box bg-base-200/60 border border-base-300">
            <h3 class="font-bold text-base mb-1 text-warning">1. Syntaxe Tableau (Simple)</h3>
            <p class="text-base-content/80 mb-2">
              Pratique pour prototyper rapidement, mais <strong>déconseillée en production</strong> car elle n'offre aucune vérification de type ni valeur par défaut.
            </p>
          </div>

          <div class="p-4 rounded-box bg-base-200/60 border border-base-300">
            <h3 class="font-bold text-base mb-1 text-success">2. Syntaxe Objet (Bonne Pratique)</h3>
            <p class="text-base-content/80 mb-2">
              Recommandée pour sécuriser et documenter ton composant. Elle permet de définir :
            </p>
            <ul class="list-disc list-inside space-y-1 text-xs text-base-content/75">
              <li><code class="font-bold">type</code> : Type attendu (String, Number, Boolean, Object...).</li>
              <li><code class="font-bold">required</code> : Rendre la prop obligatoire (<code class="font-bold">true</code>).</li>
              <li><code class="font-bold">default</code> : Valeur de secours si la prop n'est pas transmise.</li>
              <li><code class="font-bold">validator</code> : Fonction personnalisée pour valider la valeur reçue.</li>
            </ul>
          </div>
        </div>

        <!-- Code Shiki : Comparaison Tableau vs Objet -->
        <div class="pt-2">
          <span class="text-xs font-bold uppercase tracking-wider text-base-content/50 mb-2 block">Comparaison des deux syntaxe dans le composant enfant&nbsp;:</span>
          <div v-if="codeSyntaxHighlighted" v-html="codeSyntaxHighlighted" class="overflow-x-auto rounded-lg text-sm"></div>
          <div v-else class="skeleton h-64 w-full rounded-lg"></div>
        </div>
      </div>
    </section>

    <!-- Exemples Pratiques -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      
      <!-- Exemple 1 : Props simples transmises manuellement -->
      <div class="card bg-base-100 shadow-xl rounded-box border border-base-300">
        <div class="card-body flex flex-col justify-between">
          <div>
            <h2 class="card-title text-2xl font-bold mb-2">Exemple 1&nbsp;: Props simples</h2>
            <p class="text-sm text-base-content/70 mb-4">
              Passage d'attributs individuels et statiques à chaque instance de composant&nbsp;:
            </p>

            <!-- Code Shiki -->
            <div v-if="codeSimpleHighlighted" v-html="codeSimpleHighlighted" class="overflow-x-auto rounded-lg text-sm mb-4"></div>
            <div v-else class="skeleton h-64 w-full rounded-lg mb-4"></div>
          </div>

          <div>
            <span class="text-xs font-bold uppercase tracking-wider text-base-content/50 mb-1 block">Rendu interactif&nbsp;:</span>
            <div class="p-4 bg-base-200/50 rounded-box border border-base-300 space-y-3">
              <MessageCard 
                msgTitle="Super MSG Important" 
                msgContent="Ceci est un message statique transmis via une prop simple."
                msgType="important" 
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Exemple 2 : Automatisation avec v-for et v-bind -->
      <div class="card bg-base-100 shadow-xl rounded-box border border-base-300">
        <div class="card-body flex flex-col justify-between">
          <div>
            <h2 class="card-title text-2xl font-bold mb-2">Exemple 2&nbsp;: Automatisation avec <code class="text-secondary">v-for</code></h2>
            <p class="text-sm text-base-content/70 mb-4">
              Injection dynamique des propriétés d'un tableau d'objets en associant <code class="text-secondary">v-for</code> et <code class="text-secondary">v-bind</code>&nbsp;:
            </p>

            <!-- Code Shiki -->
            <div v-if="codeDynamicHighlighted" v-html="codeDynamicHighlighted" class="overflow-x-auto rounded-lg text-sm mb-4"></div>
            <div v-else class="skeleton h-64 w-full rounded-lg mb-4"></div>
          </div>

          <div>
            <span class="text-xs font-bold uppercase tracking-wider text-base-content/50 mb-1 block">Rendu interactif&nbsp;:</span>
            <div class="p-4 bg-base-200/50 rounded-box border border-base-300 space-y-3 max-h-72 overflow-y-auto">
              <MessageCard 
                v-for="item in dataFromParent" 
                :key="item.id"
                :msgTitle="item.msgTitle" 
                :msgContent="item.msgContent"
                :msgType="item.msgType" 
              />
            </div>
          </div>
        </div>
      </div>

    </div>

    <!-- Footer -->
    <div class="text-center">
      <p class="text-sm opacity-75">
        Pour en savoir plus, consulte la
        <a href="https://vuejs.org/guide/essentials/props.html" class="link link-hover link-primary font-bold" target="_blank">
          documentation officielle sur les props
        </a>.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { codeToHtml } from 'shiki';
import MessageCard from '../../components/MessageCard.vue';

interface MessageItem {
  id: number;
  msgTitle: string;
  msgContent: string;
  msgType: 'important' | 'notification';
}

// --- Données réactives transmises par le parent ---
const dataFromParent = ref<MessageItem[]>([
  {
    id: 1,
    msgTitle: "Super MSG Important",
    msgContent: "Ceci est un message important pour l'utilisateur.",
    msgType: "important"
  },
  {
    id: 2,
    msgTitle: "Message Moins important",
    msgContent: "Vous avez une nouvelle notification.",
    msgType: "notification"
  },
  {
    id: 3,
    msgTitle: "3ème Message",
    msgContent: "Contenu dynamique généré depuis le tableau.",
    msgType: "notification"
  }
]);

// --- Snippets bruts pour Shiki ---
const snippetSyntax = `<!-- ❌ Syntaxe Tableau : Rapide mais sans validation -->
<script setup>
defineProps(['msgTitle', 'msgContent', 'msgType']);
<\/script>

<!-- ✅ Syntaxe Objet (Bonne Pratique) : Robuste et documentée -->
<script setup>
defineProps({
  msgTitle: {
    type: String,
    required: true // Génère un avertissement si manquante
  },
  msgContent: {
    type: String,
    default: 'Aucun contenu fourni.' // Valeur par défaut
  },
  msgType: {
    type: String,
    default: 'notification',
    validator: (value) => ['important', 'notification'].includes(value) // Validation personnalisée
  }
});
<\/script>`;

const snippetSimple = `<template>
  <!-- Composant Parent -->
  <MessageCard 
    msgTitle="Super MSG Important" 
    msgContent="Ceci est un message statique transmis via une prop."
    msgType="important" 
  />
</template>`;

const snippetDynamic = `<template>
  <!-- Composant Parent : Automatisation avec v-for -->
  <MessageCard 
    v-for="item in dataFromParent" 
    :key="item.id"
    :msgTitle="item.msgTitle" 
    :msgContent="item.msgContent"
    :msgType="item.msgType" 
  />
</template>

<script setup>
import { ref } from 'vue';

const dataFromParent = ref([
  { id: 1, msgTitle: 'Info 1', msgContent: 'Texte 1', msgType: 'important' },
  { id: 2, msgTitle: 'Info 2', msgContent: 'Texte 2', msgType: 'notification' }
]);
<\/script>`;

// --- Variables d'état pour le HTML coloré ---
const codeSyntaxHighlighted = ref<string>('');
const codeSimpleHighlighted = ref<string>('');
const codeDynamicHighlighted = ref<string>('');

onMounted(async () => {
  const [syntaxCode, simpleCode, dynamicCode] = await Promise.all([
    codeToHtml(snippetSyntax, { lang: 'vue', theme: 'vitesse-dark' }),
    codeToHtml(snippetSimple, { lang: 'vue', theme: 'vitesse-dark' }),
    codeToHtml(snippetDynamic, { lang: 'vue', theme: 'vitesse-dark' })
  ]);

  codeSyntaxHighlighted.value = syntaxCode;
  codeSimpleHighlighted.value = simpleCode;
  codeDynamicHighlighted.value = dynamicCode;
});
</script>