const exercicesRoutes = [
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
    path: "/exercices/exercice-v-if",
    component: () => import("../views/exercices/ExerciceV-if.vue"),
    meta: { title: "Exercice 5" },
  },
  {
    path: "/exercices/exercice-v-for",
    component: () => import("../views/exercices/ExerciceV-for.vue"),
    meta: { title: "Exercice 6" },
  },
];

export default exercicesRoutes;
