<template>
  <div class="card w-full max-w-md bg-base-100 shadow-xl mx-auto">
    <div class="card-body">
      <h2 class="card-title">Contactez-nous</h2>
      <form class="space-y-4">
        <fieldset class="fieldset">
          <legend class="fieldset-legend">Nom</legend>
          <input
            type="text"
            class="input input-bordered w-full"
            placeholder="Votre nom"
            required
          />
        </fieldset>

        <fieldset class="fieldset">
          <legend class="fieldset-legend">Email</legend>
          <input
            type="email"
            class="input input-bordered w-full"
            placeholder="e-mail@exemple.fr"
            required
          />
        </fieldset>

        <fieldset class="fieldset">
          <legend class="fieldset-legend">Message</legend>
          <textarea
            class="textarea textarea-bordered w-full h-24"
            placeholder="Votre message..."
            required
          ></textarea>
        </fieldset>

        <div class="card-actions justify-end mt-4">
          <button type="submit" class="btn btn-accent w-full">Envoyer</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup></script>
