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
];

export default tpRoutes;
