<template>
  <div class="container mx-auto p-4 md:p-8 space-y-8">
    <div class="text-center">
      <h1 class="text-4xl md:text-5xl font-extrabold text-primary">
        Comprendre la Directive <code class="text-secondary">v-on</code>
      </h1>
      <p class="text-lg md:text-xl text-base-content opacity-75 mt-2 max-w-2xl mx-auto">
        La directive <code class="text-secondary">v-on</code> permet d'écouter les événements DOM et de déclencher des méthodes.
      </p>
    </div>

    <!-- Section Définition -->
    <div class="card bg-base-100 shadow-xl border border-base-300">
      <div class="card-body">
        <h2 class="card-title text-2xl font-bold mb-2">
          Qu'est-ce que <code class="text-secondary">v-on</code> ?
        </h2>
        <p>
          La directive <code class="text-secondary">v-on</code> attache des gestionnaires d'événements aux éléments HTML. La syntaxe complète est <code class="text-warning">v-on:click="handler"</code> et sa forme abrégée est <code class="text-warning">@click="handler"</code>.
        </p>
        <p>
          Elle prend en charge tous les événements DOM courants (<code class="text-accent">click</code>, <code class="text-accent">submit</code>, <code class="text-accent">keyup</code>, <code class="text-accent">input</code>) ainsi que des modificateurs de clé ou d'événement (<code class="text-accent">.prevent</code>, <code class="text-accent">.enter</code>, <code class="text-accent">.right</code>).
        </p>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <!-- Exemple 1 : Compteur de base -->
      <div class="card bg-base-100 shadow-xl rounded-box border border-base-300">
        <div class="card-body flex flex-col justify-between">
          <div>
            <h2 class="card-title text-2xl font-bold mb-2">Exemple 1 : Clic basique</h2>
            <p class="mb-4 text-sm text-base-content/70">
              Incrémenter un compteur au clic :
            </p>

            <!-- Code Shiki -->
            <div v-if="codeBasicHighlighted" v-html="codeBasicHighlighted" class="overflow-x-auto rounded-lg text-sm mb-4"></div>
            <div v-else class="skeleton h-44 w-full rounded-lg mb-4"></div>
          </div>

          <div>
            <span class="text-xs font-bold uppercase tracking-wider text-base-content/50 mb-1 block">Rendu interactif :</span>
            <div class="p-4 border rounded-box w-full text-center bg-base-200/50 space-y-2">
              <button @click="increment" class="btn btn-primary btn-sm rounded-box">
                Cliquez-moi
              </button>
              <p class="text-lg font-bold">Compteur : <span class="badge badge-primary">{{ counter }}</span></p>
            </div>
          </div>
        </div>
      </div>

      <!-- Exemple 2 : Paramètres dynamiques -->
      <div class="card bg-base-100 shadow-xl rounded-box border border-base-300">
        <div class="card-body flex flex-col justify-between">
          <div>
            <h2 class="card-title text-2xl font-bold mb-2">Exemple 2 : Passage de paramètres</h2>
            <p class="mb-4 text-sm text-base-content/70">
              Transmettre un argument personnalisé lors de l'événement :
            </p>

            <!-- Code Shiki -->
            <div v-if="codeParamsHighlighted" v-html="codeParamsHighlighted" class="overflow-x-auto rounded-lg text-sm mb-4"></div>
            <div v-else class="skeleton h-44 w-full rounded-lg mb-4"></div>
          </div>

          <div>
            <span class="text-xs font-bold uppercase tracking-wider text-base-content/50 mb-1 block">Rendu interactif :</span>
            <div class="p-4 border rounded-box w-full text-center bg-base-200/50 space-y-2">
              <button @click="showMessage('Bonjour !')" class="btn btn-success btn-sm rounded-box">
                Afficher Message
              </button>
              <p class="text-sm font-medium min-h-[1.5rem]">
                Message : <strong class="text-success">{{ message || 'Aucun' }}</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Section Avancée : Modificateurs & $event -->
    <div class="card bg-base-100 shadow-xl rounded-box border border-base-300">
      <div class="card-body">
        <h2 class="card-title text-2xl font-bold mb-2">Exemple Avancé : Modificateurs et objet <code class="text-secondary">$event</code></h2>
        <p class="text-sm text-base-content/70 mb-4">
          Gestion des événements clavier, de la saisie en direct et de la capture de coordonnées du pointeur :
        </p>

        <!-- Code Shiki -->
        <div v-if="codeAdvancedHighlighted" v-html="codeAdvancedHighlighted" class="overflow-x-auto rounded-lg text-sm mb-6"></div>
        <div v-else class="skeleton h-52 w-full rounded-lg mb-6"></div>

        <!-- Démonstrations interactives -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <!-- Touche Entrée -->
          <div class="p-4 border rounded-box bg-base-200/50 space-y-2">
            <span class="text-xs font-bold uppercase tracking-wider text-base-content/50 block">1. Modificateur @keyup.enter</span>
            <input
              @keyup.enter="submitForm"
              class="input input-bordered input-sm w-full"
              placeholder="Appuyez sur Entrée..."
            />
            <div class="alert py-2 text-xs" :class="submitted ? 'alert-success' : 'alert-info'">
              <span>Formulaire soumis : <strong>{{ submitted ? 'Oui 🎉' : 'Non' }}</strong></span>
            </div>
          </div>

          <!-- Input $event -->
          <div class="p-4 border rounded-box bg-base-200/50 space-y-2">
            <span class="text-xs font-bold uppercase tracking-wider text-base-content/50 block">2. Capture de l'événement $event</span>
            <input
              @input="capterInput($event)"
              type="text"
              class="input input-bordered input-sm w-full"
              placeholder="Tapez ici..."
            />
            <p class="text-xs font-semibold">
              Valeur : <span class="text-primary font-mono">{{ uneString }}</span>
            </p>
          </div>

          <!-- Coordonnées du Clic -->
          <div class="col-span-1 md:col-span-2 p-4 border rounded-box bg-base-200/50 space-y-2">
            <span class="text-xs font-bold uppercase tracking-wider text-base-content/50 block">3. Position du pointeur ($event)</span>
            <button @click="capterClickEvent" class="btn btn-outline btn-primary btn-sm w-full">
              Cliquer ici pour obtenir la position
            </button>
            <p class="text-xs font-mono text-center">
              Position -> X: <strong>{{ clickCoords.x }}</strong> | Y: <strong>{{ clickCoords.y }}</strong>
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div class="text-center">
      <p class="text-sm md:text-base text-base-content opacity-50">
        Consultez la
        <a href="https://vuejs.org/guide/essentials/event-handling.html" class="link link-hover text-primary font-bold" target="_blank">
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
const counter = ref(0);
const message = ref('');
const uneString = ref('Hello');
const submitted = ref(false);
const clickCoords = ref({ x: 0, y: 0 });

function increment() {
  counter.value++;
}

function showMessage(msg) {
  message.value = msg;
}

function capterInput(event) {
  console.log('Input capturé event global :', event);
  console.log('Input capturé (value) :', event.target.value);
  uneString.value = event.target.value;
}

function capterClickEvent(eventClick) {
  console.log('Clic capturé :', eventClick);
  clickCoords.value.x = eventClick.clientX;
  clickCoords.value.y = eventClick.clientY;
}

function submitForm() {
  submitted.value = true;
}

// --- Snippets bruts pour Shiki ---
const snippetBasic = `<template>
  <!-- Syntaxe complète -->
  <button v-on:click="increment">Cliquez-moi</button>

  <!-- Syntaxe raccourcie -->
  <button @click="increment">Cliquez-moi</button>
</template>

<script setup>
import { ref } from 'vue';

const counter = ref(0);
function increment() {
  counter.value++;
}
<\/script>`;

const snippetParams = `<template>
  <button @click="showMessage('Bonjour !')">
    Afficher Message
  </button>
</template>

<script setup>
import { ref } from 'vue';

const message = ref('');
function showMessage(msg) {
  message.value = msg;
}
<\/script>`;

const snippetAdvanced = `<template>
  <!-- Modificateur de touche clavier -->
  <input @keyup.enter="submitForm" />

  <!-- Événement natif passé avec $event -->
  <input @input="capterInput($event)" />

  <!-- Capture implicite de l'objet MouseEvent -->
  <button @click="capterClickEvent">Cliquer ici</button>
</template>

<script setup>
import { ref } from 'vue';

const submitted = ref(false);
const uneString = ref('');
const clickCoords = ref({ x: 0, y: 0 });

function submitForm() {
  submitted.value = true;
}

function capterInput(event) {
  uneString.value = event.target.value;
}

function capterClickEvent(event) {
  clickCoords.value.x = event.clientX;
  clickCoords.value.y = event.clientY;
}
<\/script>`;

// --- Variables d'état pour le HTML coloré ---
const codeBasicHighlighted = ref('');
const codeParamsHighlighted = ref('');
const codeAdvancedHighlighted = ref('');

onMounted(async () => {
  const [basic, params, advanced] = await Promise.all([
    codeToHtml(snippetBasic, { lang: 'vue', theme: 'vitesse-dark' }),
    codeToHtml(snippetParams, { lang: 'vue', theme: 'vitesse-dark' }),
    codeToHtml(snippetAdvanced, { lang: 'vue', theme: 'vitesse-dark' }),
  ]);

  codeBasicHighlighted.value = basic;
  codeParamsHighlighted.value = params;
  codeAdvancedHighlighted.value = advanced;
});
</script>