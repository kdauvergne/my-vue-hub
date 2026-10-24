<template>
  <div class="max-w-4xl mx-auto flex flex-col gap-4">
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
            class="collapse-title font-semibold after:start-5 after:end-auto pe-4 ps-12"
          >
            Consignes de l'exercice
          </div>
          <div class="collapse-content text-sm flex flex-col gap-3">
            <p>
              Récupérer et afficher des données depuis des API publiques avec
              <code>fetch</code>. <strong>Choix des API libre.</strong>
            </p>

            <div>
              <h3 class="font-semibold mb-1">Pour chaque API, créer un composant qui :</h3>
              <ul class="list-disc ps-6 space-y-1">
                <li>lance la requête GET au montage (<code>onMounted</code>) ;</li>
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
        <div class="flex flex-col gap-4">
          <ApiGhibli />
        </div>
        <!--  API Météo  -->
        <div class="flex flex-col gap-4">
          <ApiMeteo />
        </div>
        <!--  API Elden Ring  -->
        <div class="flex flex-col gap-4">
          <ApiElden />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ApiElden from "../../components/ApiElden.vue";
import ApiGhibli from "../../components/ApiGhibli.vue";
import ApiMeteo from "../../components/ApiMeteo.vue";
</script>

<style lang="scss" scoped></style>
