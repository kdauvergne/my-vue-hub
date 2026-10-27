<template>
  <div class="max-w-4xl mx-auto flex flex-col gap-4 mt-4">
    <div class="card bg-base-100 shadow-sm">
      <div class="card-body">
        <h2 class="card-title text-2xl justify-center">Exercice Emits</h2>
      </div>
    </div>
    <div class="card bg-base-100 shadow-sm">
      <div class="card-body pb-0">
        <NewFriend />
      </div>
      <div class="card-body grid grid-cols-1 md:grid-cols-2 gap-4">
        <OneFriendEmit
          v-for="unAmi in lesAmis"
          :key="unAmi.id"
          :id="unAmi.id"
          :name="unAmi.name"
          :phone="unAmi.phone"
          :email="unAmi.email"
          :premium="unAmi.premium"
          @mon-event-premium-update="updatePremium"
          @delete-friend="deleteFriend"
        />
      </div>
    </div>
  </div>
</template>

<script lang="js" setup>
import NewFriend from "../../components/NewFriend.vue";
import OneFriendEmit from "../../components/OneFriendEmit.vue";
import { ref } from "vue";

function updatePremium(id) {
  const unAmi = lesAmis.value.find((ami) => ami.id === id);
  unAmi.premium = !unAmi.premium;
}

function deleteFriend(id) {
  const indexAmi = lesAmis.value.findIndex((ami) => ami.id === id);
  lesAmis.value.splice(indexAmi, 1);
}

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
