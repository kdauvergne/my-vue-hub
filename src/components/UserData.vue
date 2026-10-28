<script lang="js" setup>
import { ref } from "vue";

const name = ref("");
const age = ref("");

const emit = defineEmits({
  updateUser: (nom) => {
    if (nom) {
      return true;
    }
    console.warn("Veuillez rentrer un nom valide");
    return false;
  },
});
</script>

<template>
  <div>
    <div class="card-body">
      <h2 class="card-title text-xl justify-center text-center">
        Composant formulaire d'édition
      </h2>

      <form @submit.prevent="emit('updateUser', name, age)">
        <fieldset
          class="fieldset bg-base-100 rounded-box w-xs border p-4 mx-auto my-4"
        >
          <label class="label">Nom</label>
          <input
            type="text"
            class="input"
            placeholder="Entrez le nom"
            v-model="name"
          />

          <label class="label">Âge</label>
          <input
            type="number"
            class="input"
            placeholder="Entre l'âge"
            v-model="age"
          />

          <button class="btn btn-neutral mt-4">Mettre à jour</button>
        </fieldset>
      </form>

      <div>
        <h3 class="text-m text-center justify-center">UserData</h3>
      </div>
    </div>
  </div>
</template>
