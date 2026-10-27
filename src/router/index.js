// Liste de toutes les routes de l'application

import { createRouter, createWebHistory } from "vue-router";

// On importe la route HOME pour l'utiliser dans le router
import Home from "../views/Home.vue";
import lessonsRoutes from "./router.lessons";
import exercicesRoutes from "./router.exercices";
import tpRoutes from "./router.tp";
import DetailPage from "../components/DetailPage.vue";

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

    ...lessonsRoutes,
    ...exercicesRoutes,
    ...tpRoutes,

    {
      path: "/articles-manager",
      component: () => import("../views/ArticlesManager.vue"),
      meta: { title: "Articles Manager" },
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
    {
      path: "/users",
      component: () => import("../views/Users.vue"),
      meta: { title: "Users" },
    },
    // Route spéciale pour gérer les pages non trouvées
    // Si la route sur laquelle on est ne Match pas nos autre routes (path)
    // On redirige vers une page avec un template style page 404
    {
      path: "/:pathMatch(.*)*",
      component: () => import("../views/not-found.vue"),
    },
    {
      path: "/details/:id/:name",
      name: "Details",
      component: DetailPage,
      props: true,
    },
  ],
});
export default router;
