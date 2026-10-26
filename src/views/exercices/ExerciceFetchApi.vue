<template>
  <div class="max-w-4xl mx-auto flex flex-col gap-4 mt-4">
    <div class="card bg-base-100 shadow-sm">
      <div class="card-body">
        <h2 class="card-title text-2xl justify-center">
          Une simple requête HTTP GET
        </h2>

        <div
          tabindex="0"
          class="collapse collapse-arrow bg-base-100 border-base-300 border"
        >
          <div
            class="collapse-title font-semibold after:inset-s-5 after:inset-e-auto pe-4 ps-12"
          >
            Consignes de l'exercice
          </div>
          <div class="collapse-content text-sm flex flex-col gap-3">
            <p>
              Récupérer et afficher des données depuis des API publiques avec
              <code>fetch</code>. <strong>Choix des API libre.</strong>
            </p>

            <div>
              <h3 class="font-semibold mb-1">
                Pour chaque API, créer un composant qui :
              </h3>
              <ul class="list-disc ps-6 space-y-1">
                <li>
                  lance la requête GET au montage (<code>onMounted</code>) ;
                </li>
                <li>
                  vérifie <code>response.ok</code>, sinon lève une erreur ;
                </li>
                <li>convertit la réponse en JSON ;</li>
                <li>stocke les données utiles dans une variable réactive ;</li>
                <li>les affiche dans le template ;</li>
                <li>gère les erreurs avec <code>try / catch</code>.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="card bg-base-100 shadow-sm">
      <div class="card-body">
        <!--  API Studio Ghibli -->
        <div class="card bg-base-200">
          <div class="card-body">
            <div class="flex flex-col gap-4">
              <h2 class="card-title">Les films du studio Ghibli :</h2>
              <div class="flex flex-wrap gap-2">
                <ApiGhibli
                  v-for="(film, index) in films"
                  :key="index"
                  v-bind:film="film"
                />
              </div>
            </div>
          </div>
        </div>
        <!--  API Météo  -->
        <div class="flex flex-col gap-4">
          <ApiMeteo />
        </div>
        <!--  API Elden Ring  -->
        <div class="card bg-base-200">
          <div class="card-body">
            <h2 class="card-title mb-4">Le cercle d'Elden :</h2>
            <div class="flex flex-wrap gap-4 justify-center">
              <ApiElden
                v-for="(npc, index) in npcs"
                :key="index"
                v-bind:name="npc.name"
                v-bind:image="npc.image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <h3 class="font-semibold">
        Exemple d'une fonction qui fetch avec la syntaxe then( ).then( ).catch(
        )
      </h3>
      <pre
        v-pre
        class="bg-base-200 border border-base-300 rounded-box p-4 mt-2 text-sm font-mono overflow-x-auto"
      ><code>const placeHolderApi = ()=>{
    fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => response.json())
    .then(dataTransformed => {console.log("Post récupéré :", dataTransformed);})
    .catch(error => {console.error("Erreur :", error);
    });
}</code></pre>
    </div>
    <details class="font-semibold m-4">
      <summary>Voir la correction</summary>
      <CodeBlock :code="correction" class="font-light text-xs mt-4" />
    </details>
  </div>
</template>

<script setup>
import ApiElden from "../../components/ApiElden.vue";
import ApiGhibli from "../../components/ApiGhibli.vue";
import ApiMeteo from "../../components/ApiMeteo.vue";
import CodeBlock from "../../components/CodeBlock.vue";
import correction from "../corrections/exercice-lifecycle-api.vue?raw";
import { ref, onMounted } from "vue";

// Ghibli

const films = ref([]);

onMounted(async () => {
  try {
    const response = await fetch("https://ghibliapi.vercel.app/films");

    if (!response.ok) {
      throw new Error(`Erreur HTTP ${response.status}`);
    }

    const data = await response.json();

    data.forEach((film) => {
      films.value.push(film.title);
    });
  } catch (e) {
    console.error(e);
  }
});

// Elden Ring

const npcs = ref([]);

onMounted(async () => {
  try {
    const response = await fetch("https://eldenring.fanapis.com/api/npcs");

    if (!response.ok) {
      throw new Error(`Erreur HTTP ${response.status}`);
    }

    const data = await response.json();
    console.log(data);

    npcs.value = data.data;

    console.log(npcs.value);
  } catch (e) {
    console.error(e);
  }
});
</script>

<style lang="scss" scoped></style>
