<template>
  <div
    class="w-screen ml-[calc(50%-50vw)] md:-my-8 bg-cover bg-center"
    :style="heroBackground"
  >
    <div class="hero min-h-[calc(100vh-4rem)]">
      <div class="hero-content text-center">
        <div class="max-w-2xl">
          <h1 class="text-5xl font-bold">My Vue(.js) Hub</h1>
          <p class="py-6">
            Ici, c'est un hub pour rassembler leçons et exercices sur Vue.js.
            L'objectif : apprendre en pratiquant et surtout centraliser les
            ressources pour ne pas se perdre dans la jungle du web.
          </p>
          <a href="/lessons" class="btn btn-accent">Accéder aux leçons</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import blurry from "../assets/bbblurry.svg";

const heroBackground = { backgroundImage: `url("${blurry}")` };
</script>
