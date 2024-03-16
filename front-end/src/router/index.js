import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/Home.vue";
import Login from "../pages/Login.vue";
import Chief from "../pages/Chief.vue";
import Play from "../pages/Play.vue";
import User from "../pages/User.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/chief",
    name: "Chief",
    component: Chief,
  },
  {
    path: "/play",
    component: Play,
  },
  {
    path: "/user/index",
    component: User,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
