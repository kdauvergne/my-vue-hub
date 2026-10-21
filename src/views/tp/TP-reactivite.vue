<template>
  <div class="card bg-base-100 shadow-sm max-w-4xl mx-auto my-8">
    <div class="card-body">
      <h2 class="card-title">TP Réactivité : le Numéro Gagnant</h2>

      <div class="flex flex-col gap-4">
        <div class="card bg-base-200 pb-4">
          <div class="card-body items-center gap-4">
            <h2 class="card-title">Le nombre :</h2>
            <span
              class="bg-accent text-accent-content rounded-box px-6 py-3 text-5xl font-bold"
              >{{ leNombre }}</span
            >
          </div>
          <h3
            class="text-center text-lg font-semibold uppercase tracking-wide text-base-content/70"
          >
            {{ indice }}
          </h3>
          <h3
            v-if="message"
            class="text-center text-lg font-semibold uppercase tracking-wide text-fuchsia-600"
          >
            {{ message }}
          </h3>
          <div class="card-body items-center flex-row mx-auto">
            <button class="btn btn-success mx-auto" @click="augmenter(1)">
              +1
            </button>
            <button class="btn btn-error mx-auto" @click="augmenter(5)">
              +5
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, computed } from "vue";

const leNombre = ref(0);
const message = ref("");

function augmenter(n) {
  leNombre.value += n;
}

const indice = computed(() => {
  if (leNombre.value < 7) return "ESSAIE ENCORE !";
  if (leNombre.value === 7) return "7... BINGO !";
  return "Tu as dépassé le nombre !";
});

watch(leNombre, (newNombre) => {
  if (newNombre > 30) {
    message.value = "Beaucoup trop !";
    setTimeout(() => {
      leNombre.value = 0;
      message.value = "";
    }, 7000);
  }
});
</script>
