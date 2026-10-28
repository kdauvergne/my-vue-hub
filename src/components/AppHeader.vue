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
      <RouterLink to="/connexion" class="btn btn-sm btn-neutral m-1"
        >Connexion</RouterLink
      >
      <RouterLink to="/inscription" class="btn btn-sm btn-accent m-1"
        >Inscription</RouterLink
      >
      <!-- Theme -->
      <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn btn-ghost m-1">
          <div
            class="bg-base-100 border-base-content/10 grid shrink-0 grid-cols-2 gap-0.5 rounded-md border p-1"
          >
            <div class="bg-base-content size-1 rounded-full"></div>
            <div class="bg-primary size-1 rounded-full"></div>
            <div class="bg-secondary size-1 rounded-full"></div>
            <div class="bg-accent size-1 rounded-full"></div>
          </div>

          <svg
            width="12px"
            height="12px"
            class="inline-block h-2 w-2 fill-current opacity-60"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 2048 2048"
          >
            <path
              d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"
            ></path>
          </svg>
        </div>
        <ul
          tabindex="-1"
          class="dropdown-content bg-base-300 rounded-box z-1 w-52 p-2 shadow-2xl"
        >
          <li v-for="theme in themes" :key="theme.value">
            <label
              class="btn btn-sm btn-block btn-ghost justify-start has-checked:btn-active"
            >
              <input
                type="radio"
                name="theme-dropdown"
                class="theme-controller hidden"
                :value="theme.value"
              />
              <div
                :data-theme="theme.preview"
                class="bg-base-100 grid shrink-0 grid-cols-2 gap-0.5 rounded-md p-1 shadow-sm"
              >
                <div class="bg-base-content size-1 rounded-full"></div>
                <div class="bg-primary size-1 rounded-full"></div>
                <div class="bg-secondary size-1 rounded-full"></div>
                <div class="bg-accent size-1 rounded-full"></div>
              </div>
              {{ theme.label }}
            </label>
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

const themes = [
  { label: "Default", value: "default", preview: "fantasy" },
  { label: "Retro", value: "retro", preview: "retro" },
  { label: "Cyberpunk", value: "cyberpunk", preview: "cyberpunk" },
  { label: "Valentine", value: "valentine", preview: "valentine" },
  { label: "Aqua", value: "aqua", preview: "aqua" },
];
</script>
