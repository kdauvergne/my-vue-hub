<script lang="js" setup>
defineProps({
  id: String,
  name: String,
});
</script>

<template>
  <div class="max-w-5xl mx-auto p-6">
    <h1 class="text-3xl font-bold mb-6">Détails de l'élément {{ name }}</h1>

    <div class="card bg-base-100 shadow-md w-full">
      <div class="card-body flex justify-between">
        <h2 class="card-title">Identifiant (ID) : {{ id }}</h2>
        <p>
          Voici la carte détails de <strong>{{ name }}</strong>
        </p>
        <p>
          Avec l'identifiant numéro :
          <span class="badge badge-primary">{{ id }}</span>
        </p>
        <RouterLink to="/users" class="btn btn-accent"
          >Retour à la page leçon</RouterLink
        >
      </div>
    </div>
  </div>
</template>
