// Liste de toutes les routes de l'application

import { createRouter, createWebHistory } from "vue-router";

// On importe la route HOME pour l'utiliser dans le router
import Home from "../views/Home.vue";
import lessonsRoutes from "./router.lessons";
import exercicesRoutes from "./router.exercices";
import tpRoutes from "./router.tp";
import DetailPage from "../components/DetailPage.vue";
import { getCurrentUser } from "../services/AuthService";

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
    {
      path: "/inscription",
      component: () => import("../views/auth/register.vue"),
      meta: { title: "Inscription" },
    },
    {
      path: "/connexion",
      component: () => import("../views/auth/login.vue"),
      meta: { title: "Connexion" },
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

// Navigation guard pour vérifier l'authentification avant d'accéder aux routes protégées
// (Middleware)
router.beforeEach(async (to, from, next) => {
  // Vérifie si la route nécessite une authentification
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  // Récupère l'utilisateur actuel de manière asynchrone
  const currentUser = await getCurrentUser();
  // Si la route nécessite une authentification et que l'utilisateur n'est pas connecté, redirige vers la page d'authentification
  if (requiresAuth && !currentUser) {
    return next("/connexion");
  }
  // Sinon, continue vers la route demandée
  next();
});

export default router;
