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
      path: "/contact",
      component: () => import("../views/Contact.vue"),
    },
    {
      path: "/about",
      component: () => import("../views/About.vue"),
    },
  ],
});
export default router;
