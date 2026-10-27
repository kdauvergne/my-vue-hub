<template>
  <div class="card w-full bg-base-100 shadow-sm">
    <div class="card-body">
      <h2 class="text-3xl font-bold">Ajouter un nouvel ami</h2>
      <form @submit.prevent="addNewFriend">
        <fieldset class="fieldset grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div class="flex flex-col gap-1">
            <label class="label" for="name">Nom</label>
            <input
              type="text"
              id="name"
              class="input w-full"
              placeholder="Votre nom"
              v-model.trim="newName"
              required
            />
          </div>
          <div class="flex flex-col gap-1">
            <label class="label" for="phone">Téléphone</label>
            <input
              type="tel"
              id="phone"
              class="input w-full"
              placeholder="Votre tél (ex: 06 32 12 23 10)"
              v-model.trim="newPhone"
              required
            />
          </div>
          <div class="flex flex-col gap-1">
            <label class="label" for="email">E-mail</label>
            <input
              type="email"
              id="email"
              class="input w-full"
              placeholder="Votre e-mail"
              v-model.trim="newEmail"
              required
            />
          </div>
          <button type="submit" class="btn btn-sm btn-active">
            Ajouter un ami
          </button>
        </fieldset>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const emit = defineEmits(["add-friend"]);

const newName = ref("");
const newPhone = ref("");
const newEmail = ref("");

function addNewFriend() {
  emit("add-friend", {
    name: newName.value,
    phone: newPhone.value,
    email: newEmail.value,
  });
  newName.value = "";
  newPhone.value = "";
  newEmail.value = "";
}
</script>
