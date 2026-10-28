<script lang="ts" setup>
import { ref } from "vue";
import ActiveUser from "./ActiveUser.vue";
import UserData from "./UserData.vue";
</script>

<template>
  <div class="card card-body gap-6 bg-accent">
    <h2 class="card-title text-2xl justify-center">
      Composant gestion de l'utilisateur
    </h2>

    <div class="card bg-base-100 shadow-sm">
      <ActiveUser />
    </div>
    <div class="card bg-base-100 shadow-sm">
      <UserData />
    </div>
    <h3 class="text-m text-center justify-center">ComponentCommunication</h3>
  </div>
</template>
