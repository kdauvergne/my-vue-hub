<script lang="js" setup>
import { ref } from "vue";
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
        </div>
      </div>
      <div class="card bg-base-100 shadow-md">
        <div class="card-body">
          <h2 class="card-title">Part de tickets "Urgent"</h2>
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
            />

            <select class="select select-bordered w-full md:w-64">
              <option disabled selected>Filtrer par priorité</option>
              <option>Option</option>
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
            <li class="list-row">Ticket 1</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>
