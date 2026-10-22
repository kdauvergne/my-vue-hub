<template>
  <div class="card bg-base-100 shadow-sm max-w-4xl mx-auto">
    <div class="card-body">
      <h2 class="card-title">Une simple requête HTTP GET</h2>
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
</template>

<script setup>
import ApiElden from "../../components/ApiElden.vue";
import ApiGhibli from "../../components/ApiGhibli.vue";
import ApiMeteo from "../../components/ApiMeteo.vue";
</script>

<style lang="scss" scoped></style>
