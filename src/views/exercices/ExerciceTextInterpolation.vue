<template>
  <div class="max-w-4xl mx-auto flex flex-col gap-4">
    <div class="card bg-base-100 shadow-sm">
      <div class="card-body">
        <h2 class="card-title text-2xl justify-center">
          Exercice Text Interpolation
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
            Créer un composant pour pratiquer l’interpolation de texte. Déclarer
            plusieurs variables de types différents et les afficher dans le
            template.
          </div>
        </div>
      </div>
    </div>

    <div class="card bg-base-100 shadow-sm">
      <div class="card-body">
        <div class="overflow-x-auto">
          <table class="table">
            <!-- head -->
            <thead>
              <tr>
                <th>Variable</th>
                <th>Valeur</th>
              </tr>
            </thead>
            <tbody>
              <!-- row 1 -->
              <tr>
                <td>unLivre</td>
                <td>
                  <span class="badge badge-info">{{ unLivre }}</span>
                </td>
              </tr>
              <!-- row 2 -->
              <tr>
                <td>isOnline</td>
                <td>
                  <span class="badge badge-error">{{ isOnline }}</span>
                </td>
              </tr>
              <!-- row 3 -->
              <tr>
                <td>unNombre</td>
                <td>
                  <span class="badge badge-dash">{{ unNombre }}</span>
                </td>
              </tr>
              <!-- row 4 -->
              <tr>
                <td>unTableau</td>
                <td>
                  <span class="badge badge-warning">{{ unTableau }}</span>
                </td>
              </tr>
              <!-- row 5 -->
              <tr>
                <td>unObjet</td>
                <td>
                  <span class="badge badge-accent">{{ unObjet }}</span>
                </td>
              </tr>
              <!-- row 6 -->
              <tr>
                <td>unObjet.nom</td>
                <td>
                  <span class="badge badge-accent">{{ unObjet.nom }}</span>
                </td>
              </tr>
              <!-- row 7 -->
              <tr>
                <td>unObjet['nom']</td>
                <td>
                  <span class="badge badge-accent">{{ unObjet["nom"] }}</span>
                </td>
              </tr>
              <!-- row 8 -->
              <tr>
                <td>unObjet.age</td>
                <td>
                  <span class="badge badge-accent">{{ unObjet.age }}</span>
                </td>
              </tr>
              <!-- row 9 -->
              <tr>
                <td>fonctionTest()</td>
                <td>
                  <span class="badge badge-info">{{
                    fonctionHello("Hello !")
                  }}</span>
                </td>
              </tr>
              <!-- row 10 -->
              <tr>
                <td>Un ternaire</td>
                <td>
                  <span class="badge badge-info">{{
                    isOnline ? "En ligne" : "Hors ligne"
                  }}</span>
                </td>
              </tr>
              <!-- row 11 -->

              <tr>
                <td>On affiche du HTML ?</td>
                <td>
                  <span class="badge badge-info">{{ duHTML }}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const unLivre = "Martine à la plage";

const isOnline = false;

const unNombre = 23;

const unTableau = ["Martine", "Picsou", "Astérix"];

const unObjet = {
  nom: "Martine",
  age: 12,
  ville: "Paris",
};

const fonctionHello = (text) => {
  return text;
};

const duHTML = "<h1>On affiche du HTML !</h1>";
</script>
