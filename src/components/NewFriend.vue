<template>
  <div class="card w-full bg-base-100 shadow-sm">
    <div class="card-body">
      <h2 class="text-3xl font-bold">Ajouter un nouvel ami</h2>
      <fieldset class="fieldset grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <div class="flex flex-col gap-1">
          <label class="label" for="name">Nom</label>
          <input
            type="text"
            id="name"
            class="input w-full"
            placeholder="Votre nom"
          />
        </div>
        <div class="flex flex-col gap-1">
          <label class="label" for="phone">Téléphone</label>
          <input
            type="text"
            id="phone"
            class="input w-full"
            placeholder="Votre tél (ex: 06 32 12 23 10)"
          />
        </div>
        <div class="flex flex-col gap-1">
          <label class="label" for="email">E-mail</label>
          <input
            type="text"
            id="email"
            class="input w-full"
            placeholder="Votre e-mail"
          />
        </div>
        <button class="btn btn-sm btn-active">Ajouter un ami</button>
      </fieldset>
    </div>
  </div>
</template>

<script lang="js" setup></script>
