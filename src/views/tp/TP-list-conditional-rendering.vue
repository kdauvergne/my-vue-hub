<template>
  <div class="max-w-4xl mx-auto flex flex-col gap-4">
    <div class="card bg-base-100 shadow-sm">
      <div class="card-body">
        <h2 class="card-title text-2xl justify-center">
          TP List and Conditional Rendering
        </h2>

        <div
          tabindex="0"
          class="collapse collapse-arrow bg-base-100 border-base-300 border"
        >
          <div
            class="collapse-title font-semibold after:start-5 after:end-auto pe-4 ps-12"
          >
            Consignes de l'exercice
          </div>
          <div class="collapse-content text-sm">
            <p>Créer une page qui affiche :</p>
            <p>- un input ;</p>
            <p>- un bouton Ajouter ;</p>
            <p>- une liste (de courses, de films, au choix) ;</p>
            <p>- un bouton « Masquer liste ».</p>

            <p>Fonctionnement :</p>
            <p>- le bouton Ajouter ajoute le texte de l'input dans la liste ;</p>
            <p>- le bouton « Masquer liste » affiche ou masque la liste ;</p>
            <p>- cliquer sur un élément de la liste le supprime ;</p>
            <p>
              - le texte du bouton passe de « Masquer liste » à « Afficher
              liste » selon que la liste est masquée ou non.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="card bg-base-100 shadow-sm">
      <div class="card-body">
        <div class="card-actions flex-col">
          <h3 class="text-xl font-semibold flex flex-row">
            La liste de courses
          </h3>
          <input
            v-model="article"
            type="text"
            placeholder="Article à ajouter"
            class="input w-full"
          />
          <button
            class="btn btn-primary mt-2"
            @click="addList(article.trim())"
          >
            Ajouter à la liste de courses
          </button>
          <p v-if="isDoublon">Cet article est déjà dans votre liste</p>
          <p v-if="liste.length === 0">
            Vous n'avez aucun article dans la liste
          </p>
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
