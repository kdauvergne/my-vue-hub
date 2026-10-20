<template>
  <div class="navbar bg-base-100 shadow-sm relative z-10">
    <div class="flex-1">
      <RouterLink to="/home" class="btn btn-ghost text-xl">MyVueHub</RouterLink>
    </div>
    <div class="flex-none">
      <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn btn-ghost">Leçons</div>
        <ul
          tabindex="-1"
          class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          @click="closeMenu"
        >
          <li><RouterLink to="/lessons">Toutes les leçons</RouterLink></li>
          <li v-for="lesson in lessons" :key="lesson.path">
            <RouterLink :to="lesson.path">
              {{ lesson.meta.title }}
            </RouterLink>
          </li>
        </ul>
      </div>
      <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn btn-ghost">Exercices</div>
        <ul
          tabindex="-1"
          class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          @click="closeMenu"
        >
          <li v-for="exercice in exercices" :key="exercice.path">
            <RouterLink :to="exercice.path">
              {{ exercice.meta.title }}
            </RouterLink>
          </li>
        </ul>
      </div>
      <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn btn-ghost">TP</div>
        <ul
          tabindex="-1"
          class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          @click="closeMenu"
        >
          <li v-for="tp in tps" :key="tp.path">
            <RouterLink :to="tp.path">
              {{ tp.meta.title }}
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup>
import { RouterLink, useRouter } from "vue-router";

// Toutes les routes qui commencent par /lessons/ deviennent des liens du menu
const lessons = useRouter()
  .getRoutes()
  .filter((route) => route.path.startsWith("/lessons/"));

const exercices = useRouter()
  .getRoutes()
  .filter((route) => route.path.startsWith("/exercices/"));

const tps = useRouter()
  .getRoutes()
  .filter((route) => route.path.startsWith("/tp/"));

// Le dropdown daisyUI reste ouvert tant qu'il a le focus : on le retire après un clic sur un lien
const closeMenu = () => document.activeElement?.blur();
</script>
