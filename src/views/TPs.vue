<script setup>
import { useRouter } from "vue-router";

const lessons = useRouter()
  .getRoutes()
  .filter((route) => route.path.startsWith("/tp/"));
</script>

<template>
  <ul class="menu bg-base-100 rounded-box w-full">
    <li v-for="tp in tps" :key="tp.path">
      <RouterLink :to="tp.path">
        {{ tp.meta.title }}
      </RouterLink>
    </li>
  </ul>
</template>
