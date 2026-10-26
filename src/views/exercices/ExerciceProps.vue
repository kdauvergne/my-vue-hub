<template>
  <div class="max-w-4xl mx-auto flex flex-col gap-4 mt-4">
    <div class="card bg-base-100 shadow-sm">
      <div class="card-body">
        <h2 class="card-title text-2xl justify-center">Exercice Props</h2>
      </div>
    </div>
    <div class="card bg-base-100 shadow-sm">
      <div class="card-body grid grid-cols-1 md:grid-cols-2 gap-4">
        <OneFriend
          v-for="(ami, index) in lesAmis"
          :key="index"
          v-bind:id="ami.id"
          v-bind:name="ami.name"
          v-bind:phone="ami.phone"
          v-bind:email="ami.email"
          v-bind:premium="ami.premium"
        />
      </div>
    </div>
  </div>
</template>

<script lang="js" setup>
import OneFriend from "../../components/OneFriend.vue";
import { ref } from "vue";

const lesAmis = ref([
  {
    id: "Philou",
    name: "Philippe D.",
    phone: "0632010234",
    email: "philou@hotmail.fr",
    premium: true,
  },
  {
    id: "Coco",
    name: "Coco l'asticot",
    phone: "0645187392",
    email: "leCoco.A@gmail.com",
    premium: false,
  },
  {
    id: "Jojo",
    name: "Jordan M.",
    phone: "0712450968",
    email: "jojo.martin@orange.fr",
    premium: true,
  },
  {
    id: "Clem",
    name: "Clémence B.",
    phone: "0678923415",
    email: "clem.b@outlook.fr",
    premium: false,
  },
  {
    id: "Bébert",
    name: "Hubert L.",
    phone: "0623784501",
    email: "bebert31@free.fr",
    premium: true,
  },
]);
</script>
