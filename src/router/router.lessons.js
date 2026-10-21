const lessonsRoutes = [
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
    path: "/lessons/computed-properties",
    component: () => import("../views/lessons/lesson-computed-properties.vue"),
    meta: { title: "Computed properties" },
  },
];

export default lessonsRoutes;
