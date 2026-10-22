<template>
  <div class="card bg-base-100 shadow-sm max-w-4xl mx-auto my-8">
    <div class="card-body">
      <h2 class="card-title">TP List and Conditional Rendering</h2>

      <div class="card-actions flex-col mt-4">
        <h3 class="text-xl font-semibold flex flex-row">La liste de courses</h3>
        <input
          v-model="article"
          type="text"
          placeholder="Article à ajouter"
          class="input w-full"
        />
        <button class="btn btn-primary mt-2" @click="addList(article.trim())">
          Ajouter à la liste de courses
        </button>
        <p v-if="isDoublon">Cet article est déjà dans votre liste</p>
        <p v-if="liste.length === 0">Vous n'avez aucun article dans la liste</p>
        <p v-else>Liste d'articles :</p>
        <ul :style="{ display: visible ? 'block' : 'none' }" class="mt-4">
          <li v-for="(article, index) in liste" :key="index">
            {{ index + 1 }} {{ article }}
          </li>
        </ul>
      </div>
      <div class="divider w-full"></div>
      <button class="btn btn-secondary w-fit" @click="hide">
        {{ visible ? "Masquer" : "Afficher " }} la liste
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const visible = ref(true);

const liste = ref([]);
const article = ref("");
const isDoublon = ref(false);

function hide() {
  visible.value = !visible.value;
}

function addList(element) {
  element = element.trim();
  if (element === "") {
    alert("Veuillez entrer au moins un article.");
    return;
  } else if (liste.value.includes(element)) {
    isDoublon.value = true;
    return;
  }
  liste.value.push(element);
  article.value = "";
  isDoublon.value = false;
}
</script>
