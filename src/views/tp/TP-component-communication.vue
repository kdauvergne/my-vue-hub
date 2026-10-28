<script lang="js" setup>
import ComponentCommunication from "../../components/ComponentCommunication.vue";
</script>

<template>
  <div class="max-w-4xl mx-auto flex flex-col gap-4 mt-4">
    <div class="card bg-base-100 shadow-sm">
      <div class="card-body">
        <h2 class="card-title text-2xl justify-center">
          TP Component communication
        </h2>
      </div>
    </div>
    <div class="card bg-base-100 shadow-sm">
      <ComponentCommunication />
    </div>
  </div>
</template>
