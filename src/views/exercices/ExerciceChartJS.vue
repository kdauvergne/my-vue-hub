<template>
  <div class="max-w-4xl mx-auto flex flex-col gap-4">
    <div class="card bg-base-100 shadow-sm">
      <div class="card-body">
        <h2 class="card-title text-2xl justify-center">
          Exemple de Chart.js dynamique
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
          <div class="collapse-content text-sm">
            <p>
              Créer une page avec un composant qui intègre la librairie
              Chart.js.
            </p>
            <p>
              Se renseigner sur les wrappers de librairies : plutôt que
              d'intégrer Chart.js directement, utiliser
              <a
                href="https://vue-chartjs.org/"
                target="_blank"
                class="link link-primary"
                >vue-chartjs</a
              >
              pour une meilleure intégration avec les directives de Vue.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="card bg-base-100 shadow-sm">
      <div class="card-body">
        <div class="w-full">
          <BarChart />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import BarChart from "../../components/BarChart.vue";
</script>

<style lang="scss" scoped></style>
