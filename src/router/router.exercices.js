const exercicesRoutes = [
  {
    path: "/exercices/exercice-text-interpolation",
    component: () => import("../views/exercices/ExerciceTextInterpolation.vue"),
    meta: { title: "Text interpolation" },
  },
  {
    path: "/exercices/exercice-attribute-binding",
    component: () => import("../views/exercices/ExerciceAttributeBinding.vue"),
    meta: { title: "Attribute binding" },
  },
  {
    path: "/exercices/exercice-event-binding",
    component: () => import("../views/exercices/ExerciceEventBinding.vue"),
    meta: { title: "Event binding" },
  },
  {
    path: "/exercices/exercice-dynamic-styling",
    component: () => import("../views/exercices/ExerciceDynamicStyling.vue"),
    meta: { title: "Dynamic styling" },
  },
  {
    path: "/exercices/exercice-v-if",
    component: () => import("../views/exercices/ExerciceV-if.vue"),
    meta: { title: "V-if" },
  },
  {
    path: "/exercices/exercice-v-for",
    component: () => import("../views/exercices/ExerciceV-for.vue"),
    meta: { title: "V-for" },
  },
  {
    path: "/exercices/exercice-crash-test-computed",
    component: () => import("../views/exercices/ExerciceCrashTestComputed.vue"),
    meta: { title: "Crash Test Computed" },
  },
  {
    path: "/exercices/exercice-watchers",
    component: () => import("../views/exercices/ExerciceWatchers.vue"),
    meta: { title: "Watchers" },
  },
  {
    path: "/exercices/exercice-fetch-api",
    component: () => import("../views/exercices/ExerciceFetchApi.vue"),
    meta: { title: "Fetch Api (onMounted)" },
  },
];

export default exercicesRoutes;
