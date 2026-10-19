<template>
  <div class="card bg-base-100 shadow-sm max-w-4xl mx-auto">
    <div class="card-body">
      <h2 class="card-title text-2xl center justify-center">
        Exercice Text Interpolation
      </h2>
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
