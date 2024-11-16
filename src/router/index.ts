import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView,
    // },
    {
      path: "/home",
      redirect: "/", // 默认重定向到 /home
    },
    {
      path: "/",
      name: "home",
      component: () => import("../views/home/index.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("../views/contact/index.vue"),
    },
    {
      path: "/price",
      name: "price",
      component: () => import("../views/price/index.vue"),
    },
    {
      path: "/process",
      name: "process",
      component: () => import("../views/process/index.vue"),
    },
    {
      path: "/work",
      name: "work",
      component: () => import("../views/work/index.vue"),
    },
  ],
});

export default router;
