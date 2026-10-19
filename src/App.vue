<template>
  <div class="min-h-screen flex flex-col bg-base-200 text-base-content">
    <!-- Affiche le composant de la navbar -->
    <AppHeader />
    <div class="flex-1 max-w-7xl mx-auto w-full px-4 md:p-8">
      <!-- Router view fera le rendu des composants qui correspondent à la route courante -->
      <router-view />
    </div>
    <!-- Affiche le composant du footer -->
    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
</script>
