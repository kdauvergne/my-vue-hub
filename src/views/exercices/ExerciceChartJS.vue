<template>
  <div class="card bg-base-100 shadow-sm max-w-4xl mx-auto my-8">
    <div class="card-body">
      <h2 class="card-title text-2xl font-bold mb-4 justify-center">
        Exemple de Chart.js dynamique
      </h2>

      <div class="w-full">
        <BarChart />
      </div>
    </div>
  </div>
</template>

<script setup>
import BarChart from "../../components/BarChart.vue";
</script>

<style lang="scss" scoped></style>
