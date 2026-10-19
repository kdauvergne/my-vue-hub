<script setup>
import { useRouter } from "vue-router";

const lessons = useRouter()
  .getRoutes()
  .filter((route) => route.path.startsWith("/lessons/"));
</script>

<template>
  <ul class="menu bg-base-100 rounded-box w-full">
    <li v-for="lesson in lessons" :key="lesson.path">
      <RouterLink :to="lesson.path">
        {{ lesson.meta.title }}
      </RouterLink>
    </li>
  </ul>
</template>
