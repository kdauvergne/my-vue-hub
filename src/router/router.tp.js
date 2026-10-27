const tpRoutes = [
  {
    path: "/tp/tp-databinding",
    component: () => import("../views/tp/TP-databinding.vue"),
    meta: { title: "TP Databinding" },
  },
  {
    path: "/tp/tp-dynamic-styling",
    component: () => import("../views/tp/TP-dynamic-styling.vue"),
    meta: { title: "TP Dynamic Styling" },
  },
  {
    path: "/tp/tp-reactivite",
    component: () => import("../views/tp/TP-reactivite.vue"),
    meta: { title: "TP Réactivité" },
  },
  {
    path: "/tp/tp-list-conditional-rendering",
    component: () => import("../views/tp/TP-list-conditional-rendering.vue"),
    meta: { title: "TP List and conditional rendering" },
  },
  {
    path: "/tp/tp-tour-par-tour",
    component: () => import("../views/tp/TP-jeu-tour-par-tour.vue"),
    meta: { title: "TP Jeu tour par tour" },
  },
  {
    path: "/tp/router-props",
    component: () => import("../views/Users.vue"),
    meta: { title: "TP Router et Props" },
  },
  {
    path: "/tp/TP-emits",
    component: () => import("../views/exercices/ExerciceEmits.vue"),
    meta: { title: "TP Emits" },
  },
];

export default tpRoutes;
