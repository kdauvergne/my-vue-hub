<template>
  <div ref="vantaRef" class="w-screen ml-[calc(50%-50vw)] md:-my-8">
    <div class="hero min-h-[calc(100vh-4rem)]">
      <div class="hero-content text-center">
        <div class="max-w-2xl">
          <h1 class="text-5xl font-bold">Hello !</h1>
          <p class="py-6">
            Ici, c'est un hub pour rassembler leçons et exercices sur Vue.js.
            L'objectif : apprendre en pratiquant et surtout centraliser les
            ressources pour ne pas se perdre dans la jungle du web.
          </p>
          <button class="btn btn-accent">Accéder aux leçons</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import * as THREE from "three";
import CLOUDS from "vanta/src/vanta.clouds";

const vantaRef = ref(null);
let vantaEffect = null;

onMounted(() => {
  vantaEffect = CLOUDS({
    el: vantaRef.value,
    THREE,
    color: 0x3fafff,
    backgroundColor: 0x23153c,
  });
});

onBeforeUnmount(() => {
  vantaEffect?.destroy();
});
</script>
