<template>
  <div class="container mx-auto p-4 md:p-8 space-y-8">
    <div class="text-center">
      <h1 class="text-4xl md:text-5xl font-extrabold text-primary">
        Les Événements Personnalisés avec <code class="text-secondary">$emit</code>
      </h1>
      <p class="text-lg md:text-xl text-base-content opacity-75 mt-2 max-w-2xl mx-auto">
        En Vue.js, la méthode <code class="text-secondary">$emit</code> permet à un composant enfant de transmettre des messages ou des données vers son composant parent.
      </p>
    </div>

    <!-- Section Théorie : Principe du $emit -->
    <section id="definition">
      <div class="card bg-base-100 shadow-xl border border-base-300 p-6">
        <h2 class="card-title text-2xl font-bold mb-3">Qu'est-ce que <code class="text-secondary">$emit</code>&nbsp;?</h2>
        <p class="text-base-content opacity-80">
          Alors que les <strong>props</strong> descendent du parent vers l'enfant, les <strong>événements</strong> remontent de l'enfant vers le parent. L'enfant déclenche un événement avec <code class="text-secondary">emit('nom-evenement', payload)</code> et le parent l'écoute via la directive <code class="text-secondary">v-on:nom-evenement</code> (ou le raccourci <code class="text-secondary">@nom-evenement</code>).
        </p>
      </div>
    </section>

    <!-- Section Théorie : Modes de déclaration de defineEmits -->
    <section id="declaration-modes">
      <div class="card bg-base-100 shadow-xl border border-base-300 p-6 space-y-4">
        <h2 class="card-title text-2xl font-bold">Déclarer les événements dans l'enfant avec <code class="text-secondary">defineEmits()</code></h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div class="p-4 rounded-box bg-base-200/60 border border-base-300">
            <h3 class="font-bold text-base mb-1 text-warning">1. Mode Tableau (Simple)</h3>
            <p class="text-base-content/80">
              Permet de lister rapidement les événements émis par le composant. Simple et concis, mais n'effectue aucun contrôle sur la validité des arguments émis.
            </p>
          </div>

          <div class="p-4 rounded-box bg-base-200/60 border border-base-300">
            <h3 class="font-bold text-base mb-1 text-success">2. Mode Objet avec Validation (Bonne Pratique)</h3>
            <p class="text-base-content/80">
              Permet d'associer une fonction de validation à chaque événement. Si la fonction renvoie <code class="font-bold">false</code>, Vue affichera un avertissement dans la console de développement.
            </p>
          </div>
        </div>

        <!-- Code Shiki : Comparaison Tableau vs Objet -->
        <div class="pt-2">
          <span class="text-xs font-bold uppercase tracking-wider text-base-content/50 mb-2 block">Comparaison des deux modes dans le composant enfant&nbsp;:</span>
          <div v-if="codeSyntaxHighlighted" v-html="codeSyntaxHighlighted" class="overflow-x-auto rounded-lg text-sm"></div>
          <div v-else class="skeleton h-64 w-full rounded-lg"></div>
        </div>
      </div>
    </section>

    <!-- Section Exemple Interactif -->
    <section id="example">
      <div class="card bg-base-100 shadow-xl border border-base-300">
        <div class="card-body">
          <h2 class="card-title text-2xl font-bold mb-2">Exemple Pratique&nbsp;: Interaction Parent-Enfant</h2>
          <p class="text-sm text-base-content/70 mb-4">
            Le composant enfant émet les événements <code class="text-secondary">childLiked</code> et <code class="text-secondary">childUnliked</code> que le composant parent écoute pour mettre à jour son état réactif.
          </p>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            <!-- Code Shiki -->
            <div class="flex flex-col justify-between">
              <div v-if="codeExampleHighlighted" v-html="codeExampleHighlighted" class="overflow-x-auto rounded-lg text-sm"></div>
              <div v-else class="skeleton h-64 w-full rounded-lg"></div>
            </div>

            <!-- Rendu Interactif -->
            <div class="p-6 bg-base-200/50 rounded-box border border-base-300 flex flex-col justify-between items-center text-center space-y-4">
              <span class="text-xs font-bold uppercase tracking-wider text-base-content/50 block">Rendu interactif</span>

              <div class="space-y-3">
                <p class="text-sm font-semibold">
                  État réactif du parent (<code class="text-secondary">isLiked</code>)&nbsp;: 
                  <span class="badge font-mono" :class="isLiked ? 'badge-success text-white' : 'badge-ghost'">{{ isLiked }}</span>
                </p>

                <!-- Composant Enfant émetteur -->
                <LikeButton @childLiked="handleLike" @childUnliked="handleUnlike" />
              </div>

              <div class="w-full max-w-xs">
                <p v-if="isLiked" class="alert alert-success text-sm font-bold shadow-sm">
                  Merci d'avoir aimé cette publication&nbsp;!
                </p>
                <p v-else class="alert alert-error text-sm font-bold text-white shadow-sm">
                  Vous avez retiré votre like.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <div class="text-center">
      <p class="text-sm opacity-75">
        Pour plus d'informations, consulte la
        <a href="https://vuejs.org/guide/components/events.html" class="link link-hover link-primary font-bold" target="_blank">
          documentation officielle sur les événements personnalisés
        </a>.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { codeToHtml } from 'shiki';
import LikeButton from '../../components/LikeButton.vue';

// --- État réactif du composant parent ---
const isLiked = ref<boolean>(false);

function handleLike(eventFirstData?: unknown, eventSecondData?: unknown): void {
  console.log('Événement childLiked reçu par le parent');
  console.log('Donnée 1 :', eventFirstData);
  console.log('Donnée 2 :', eventSecondData);
  isLiked.value = true;
}

function handleUnlike(eventData?: unknown): void {
  console.log('Événement childUnliked reçu par le parent :', eventData);
  isLiked.value = false;
}

// --- Snippets bruts pour Shiki ---
const snippetSyntax = `<!-- ❌ Mode Tableau : Simple mais sans contrôle -->
<script setup>
const emit = defineEmits(["childLiked", "childUnliked"]);
<\/script>

<!-- ✅ Mode Objet (Bonne Pratique) : Avec validation des arguments émis -->
<script setup>
const emit = defineEmits({
  // Événement sans validation obligatoire ou vérifiant la présence de données
  childLiked: (uneData) => {
    if (uneData) {
      return true;
    } else {
      console.warn("L'événement childLiked a été émis sans id.");
      return false;
    }
  },
  // Événement avec contrôle précis du paramètre transmis
  childUnliked: (unNombre) => {
    if (unNombre) {
      return true;
    } else {
      console.warn("L'événement childUnliked a été émis sans paramètre.");
      return false;
    }
  }
});
<\/script>`;

const snippetExample = `<!-- Parent (LessonEmit.vue) -->
<template>
  <LikeButton 
    @childLiked="handleLike" 
    @childUnliked="handleUnlike" 
  />
  <p v-if="isLiked">Merci d'avoir aimé !</p>
</template>

<script setup>
import { ref } from 'vue';
import LikeButton from './LikeButton.vue';

const isLiked = ref(false);

function handleLike() {
  isLiked.value = true;
}

function handleUnlike() {
  isLiked.value = false;
}
<\/script>`;

// --- Variables d'état pour le HTML coloré ---
const codeSyntaxHighlighted = ref<string>('');
const codeExampleHighlighted = ref<string>('');

onMounted(async () => {
  const [syntaxCode, exampleCode] = await Promise.all([
    codeToHtml(snippetSyntax, { lang: 'vue', theme: 'vitesse-dark' }),
    codeToHtml(snippetExample, { lang: 'vue', theme: 'vitesse-dark' })
  ]);

  codeSyntaxHighlighted.value = syntaxCode;
  codeExampleHighlighted.value = exampleCode;
});
</script>