<script lang="js" setup>
import { ref } from "vue";
import ActiveUser from "./ActiveUser.vue";
import UserData from "./UserData.vue";

const name = ref("");
const age = ref(0);

const updateUser = (newName, newAge) => {
  name.value = newName;
  age.value = Number(newAge);
};
</script>

<template>
  <div class="card card-body gap-6 bg-accent">
    <h2 class="card-title text-2xl justify-center">
      Composant gestion de l'utilisateur
    </h2>

    <div class="card bg-base-100 shadow-sm">
      <ActiveUser :name="name" :age="age" />
    </div>
    <div class="card bg-base-100 shadow-sm">
      <UserData @update-user="updateUser" />
    </div>
    <h3 class="text-m text-center justify-center">ComponentCommunication</h3>
  </div>
</template>
