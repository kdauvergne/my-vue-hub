// Liste de toutes les routes de l'application

import { createRouter, createWebHistory } from "vue-router";

// On importe la route HOME pour l'utiliser dans le router
import Home from "../views/Home.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // Route HOME pas en lazy loading, importée directement au début du fichier
    {
      path: "/home",
      component: Home,
    },

    // Routes CONTACT et ABOUT en lazy loading, importées uniquement quand on navigue vers ces routes
    {
      path: "/lessons",
      component: () => import("../views/Lessons.vue"),
    },
    {
      path: "/about",
      component: () => import("../views/About.vue"),
    },
    {
      path: "/lessons/introduction",
      component: () => import("../views/lessons/lesson-introduction.vue"),
      meta: { title: "Introduction" },
    },
    {
      path: "/lessons/setup",
      component: () => import("../views/lessons/lesson-setup.vue"),
      meta: { title: "Setup Vue" },
    },
    {
      path: "/lessons/text-interpolation",
      component: () => import("../views/lessons/lesson-text-interpolation.vue"),
      meta: { title: "Text interpolation" },
    },
    {
      path: "/lessons/attribute-binding",
      component: () => import("../views/lessons/lesson-attribute-binding.vue"),
      meta: { title: "Attribute binding" },
    },
    {
      path: "/lessons/event-binding",
      component: () => import("../views/lessons/lesson-event-binding.vue"),
      meta: { title: "Event binding" },
    },
    {
      path: "/exercices/exercice-text-interpolation",
      component: () =>
        import("../views/exercices/ExerciceTextInterpolation.vue"),
      meta: { title: "Exercice 1" },
    },
  ],
});
export default router;
