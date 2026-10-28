<script lang="js" setup>
import { computed, ref } from "vue";

const priorites = ref(["Haute", "Basse", "Moyenne"]);

const tickets = ref([
  {
    id: 1,
    titre: "Impossible de se connecter à la base de données",
    categorie: "Infrastructure",
    priorite: "Haute",
  },
  {
    id: 2,
    titre: "Erreur 500 lors de la validation du panier",
    categorie: "Backend",
    priorite: "Haute",
  },
  {
    id: 3,
    titre: "Le bouton de déconnexion est mal aligné sur mobile",
    categorie: "UI/UX",
    priorite: "Basse",
  },
  {
    id: 4,
    titre: "Lenteur excessive sur l'affichage du tableau de bord",
    categorie: "Performance",
    priorite: "Moyenne",
  },
  {
    id: 5,
    titre: "Le formulaire de contact n'envoie pas d'email",
    categorie: "Backend",
    priorite: "Moyenne",
  },
  {
    id: 6,
    titre: "Mettre à jour le logo dans le header",
    categorie: "UI/UX",
    priorite: "Basse",
  },
]);

const title = ref("");
const priority = ref("");

const filteredTickets = computed(() =>
  tickets.value.filter(
    (t) =>
      t.titre.toLowerCase().includes(title.value.toLowerCase()) &&
      t.priorite.includes(priority.value),
  ),
);

const nbFiltered = computed(() => filteredTickets.value.length);

const stats = computed(() => {
  const nb = filteredTickets.value.filter((t) => t.priorite === "Haute").length;
  const percentage = (nb / nbFiltered.value) * 100;
  return Math.round(percentage);
});
</script>

<template>
  <div class="container mx-auto p-6 flex flex-col gap-8">
    <div class="card bg-base-100 shadow-sm">
      <div class="card-body">
        <h2 class="card-title text-2xl justify-center">
          TP Computed properties
        </h2>
      </div>
    </div>

    <section class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="card bg-base-100 shadow-md">
        <div class="card-body">
          <h2 class="card-title">Tickets affichés</h2>
          <p class="text-2xl text-center font-bold">{{ nbFiltered }}</p>
        </div>
      </div>
      <div class="card bg-base-100 shadow-md">
        <div class="card-body">
          <h2 class="card-title">Part de tickets "Urgent"</h2>
          <p class="text-2xl text-center font-bold">{{ stats }} %</p>
        </div>
      </div>
    </section>

    <section>
      <div class="card bg-base-100 shadow-md">
        <div class="card-body">
          <h2 class="card-title">Rechercher un ticket</h2>
          <div class="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Ex: base de données..."
              class="input input-bordered w-full"
              v-model="title"
            />

            <select
              class="select select-bordered w-full md:w-64"
              v-model="priority"
            >
              <option disabled selected>Filtrer par priorité</option>
              <option value="" v-for="priorite in priorites" :key="priorite">
                {{ priorite }}
              </option>
            </select>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="card bg-base-100 shadow-md">
        <div class="card-body">
          <h2 class="card-title">Liste des incidents</h2>
          <ul class="list bg-base-100 rounded-box">
            <li
              class="list-row"
              v-for="ticket in filteredTickets"
              :key="ticket.id"
            >
              {{ ticket.titre }}
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>
