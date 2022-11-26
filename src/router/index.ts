import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import store from "@/store";
import { nextTick } from "vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/404",
    name: "404",
    component: () => import("../views/404.vue"),
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/404",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, _from, next) => {
  const user = await store.getters.getUser;
  user
    ? to.fullPath === "/login"
      ? next("/")
      : next()
    : to.fullPath === "/login"
    ? next()
    : next("/login");
});

export default router;
