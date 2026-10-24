<template>
  <div class="max-w-4xl mx-auto flex flex-col gap-4">
    <div class="card bg-base-100 shadow-sm">
      <div class="card-body">
        <h2 class="card-title text-2xl justify-center">
          TP Databinding : Profil utilisateur (interpolation + v-bind)
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
            <p>
              Créer un composant qui affiche les informations d'un utilisateur :
              une image, un nom et un âge.
            </p>
            <p>Dans le template, appeler :</p>
            <p>- une fonction qui retourne l'âge + 10 ;</p>
            <p>
              - une fonction qui retourne son numéro fétiche (nombre aléatoire).
            </p>

            <p>
              Ajouter un input de type texte pré-rempli avec le nom de
              l'utilisateur.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="card bg-base-100 shadow-sm">
      <div class="card-body">
        <div class="flex flex-col gap-4">
          <div class="card bg-base-200">
            <div class="card-body">
              <img
                v-bind:src="imageUrl"
                :alt="Buffy"
                class="w-20 h-20 rounded-full object-cover mx-auto border-2"
              />
              <h3 class="card-title justify-center">Buffy Summers</h3>
              <input
                v-bind:value="Buffy"
                type="text"
                class="input input-bordered w-full max-w-xs mx-auto"
              />
              <div class="flex flex-col gap-2">
                <div class="flex items-center justify-center gap-2">
                  <span>Âge :</span>
                  <span class="badge badge-accent">{{ age }}</span>
                </div>
              </div>
              <div class="flex flex-col gap-2">
                <div class="flex items-center justify-center gap-2">
                  <span>Âge +10 :</span>
                  <span class="badge badge-success">{{ age + 10 }}</span>
                </div>
              </div>
              <div class="flex flex-col gap-2">
                <div class="flex items-center justify-center gap-2">
                  <span>Nombre fétiche :</span>
                  <span class="badge badge-neutral">{{ favoriteNumber }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const Buffy = ref("Buffy Summers");
const imageUrl = ref(
  "https://npr.brightspotcdn.com/dims4/default/70819b0/2147483647/strip/true/crop/1512x1008+0+0/resize/1760x1174!/format/webp/quality/90/?url=https%3A%2F%2Fmedia.npr.org%2Fassets%2Fimg%2F2017%2F03%2F09%2Fgettyimages-906538_slide-134899b5a61188a75eddc4150a986fa0d577aa6a.jpg",
);

const age = ref(18);
const favoriteNumber = ref(Math.ceil(Math.random() * 1000000));
</script>
