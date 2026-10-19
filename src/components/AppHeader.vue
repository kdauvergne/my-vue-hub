<template>
  <div class="navbar bg-base-100 shadow-sm">
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
          <li><a>Exercice 1</a></li>
          <li><a>Exercice 2</a></li>
        </ul>
      </div>
      <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn btn-ghost">Exercices</div>
        <ul
          tabindex="-1"
          class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          @click="closeMenu"
        >
          <li><a>Exercice 1</a></li>
          <li><a>Exercice 2</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup>
import { RouterLink } from "vue-router";

// Le dropdown daisyUI reste ouvert tant qu'il a le focus : on le retire après un clic sur un lien
const closeMenu = () => document.activeElement?.blur();
</script>
