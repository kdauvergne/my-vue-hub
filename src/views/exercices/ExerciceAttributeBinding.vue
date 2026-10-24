<template>
  <div class="max-w-4xl mx-auto flex flex-col gap-4">
    <div class="card bg-base-100 shadow-sm">
      <div class="card-body">
        <h2 class="card-title text-2xl justify-center">
          Exercice Attribute Binding
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
            Dans une page, afficher une image avec un src dynamique et des
            liens.
          </div>
        </div>
      </div>
    </div>

    <div class="card bg-base-100 shadow-sm">
      <div class="card-body">
        <p>
          On utilise v-bind:href ou sa syntaxe abrégée :href pour lier
          l'attribut `href`à une variable.
        </p>
        <h3 class="card-title">Lien dynamique</h3>
        <a v-bind:href="unLien" class="btn btn-accent"
          >Lien dynamique (v-bind)</a
        >
        <a :href="unLien" class="btn btn-neutral">Lien dynamique (:)</a>

        <p>Variable ref : unLien.value = https://vuejs.org"</p>
      </div>
    </div>

    <div class="card bg-base-100 shadow-sm">
      <div class="card-body">
        <h3 class="card-title">Liaison d'image</h3>
        <p>
          La liaison d'attributs s'applique également aux balises &lt;img&gt;
          pour charger des images dynamiquement.
        </p>
        <img
          v-bind:src="imageUrl"
          alt="Image dynamique"
          class="w-full h-48 object-cover rounded-box mb-3 shadow-lg"
        />
        <p>Variable ref : imageUrl.value = https://picsum.photos/400/300"</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const unLien = ref("https://vuejs.org");
const imageUrl = ref("https://picsum.photos/400/300");
</script>
