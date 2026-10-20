// Liste de toutes les routes de l'application

import { createRouter, createWebHistory } from "vue-router";

// On importe la route HOME pour l'utiliser dans le router
import Home from "../views/Home.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/home",
    },

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
      path: "/contact",
      component: () => import("../views/Contact.vue"),
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
      path: "/lessons/two-way-binding",
      component: () => import("../views/lessons/lesson-two-way-binding.vue"),
      meta: { title: "Two way binding" },
    },
    {
      path: "/lessons/conditional-rendering",
      component: () =>
        import("../views/lessons/lesson-conditional-rendering.vue"),
      meta: { title: "Conditional rendering" },
    },
    {
      path: "/lessons/dynamic-styling",
      component: () => import("../views/lessons/lesson-dynamic-styling.vue"),
      meta: { title: "Dynamic styling" },
    },
    {
      path: "/lessons/list-rendering",
      component: () => import("../views/lessons/lesson-list-rendering.vue"),
      meta: { title: "List rendering" },
    },
    {
      path: "/exercices/exercice-text-interpolation",
      component: () =>
        import("../views/exercices/ExerciceTextInterpolation.vue"),
      meta: { title: "Exercice 1" },
    },
    {
      path: "/exercices/exercice-attribute-binding",
      component: () =>
        import("../views/exercices/ExerciceAttributeBinding.vue"),
      meta: { title: "Exercice 2" },
    },
    {
      path: "/exercices/exercice-event-binding",
      component: () => import("../views/exercices/ExerciceEventBinding.vue"),
      meta: { title: "Exercice 3" },
    },
    {
      path: "/exercices/exercice-dynamic-styling",
      component: () => import("../views/exercices/ExerciceDynamicStyling.vue"),
      meta: { title: "Exercice 4" },
    },
    {
      path: "/tp/tp-databinding",
      component: () => import("../views/tp/TP-databinding.vue"),
      meta: { title: "TP Databinding" },
    },
    {
      path: "/privacy-policy",
      component: () => import("../views/Privacy.vue"),
      meta: { title: "Politique de confidentialité" },
    },
    {
      path: "/mentions-legales",
      component: () => import("../views/Mentions.vue"),
      meta: { title: "Mentions légales" },
    },
    // Route spéciale pour gérer les pages non trouvées
    // Si la route sur laquelle on est ne Match pas nos autre routes (path)
    // On redirige vers une page avec un template style page 404
    {
      path: "/:pathMatch(.*)*",
      component: () => import("../views/not-found.vue"),
    },
  ],
});
export default router;
