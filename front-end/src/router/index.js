import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/Home.vue";
import UserLogin from "../pages/UserLogin.vue";
import OwnerLogin from "../pages/OwnerLogin.vue";
import Chief from "../pages/Chief.vue";
import OwnerList from "../pages/OwnerList.vue";
import Statistics from "../pages/Statistics.vue";
import EchartDemo from "../pages/EchartDemo.vue";
import Play from "../pages/Play.vue";
import User from "../pages/User.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/user/login",
    name: "UserLogin",
    component: UserLogin,
  },
  {
    path: "/owner/login",
    name: "OwnerLogin",
    component: OwnerLogin,
  },
  {
    path: "/chief",
    name: "Chief",
    component: Chief,
  },
  {
    path: "/chief/ownerlist",
    name: "OwnerList",
    component: OwnerList,
  },
  {
    path: "/owner/statistics",
    name: "Statistics",
    component: Statistics,
  },
  {
    path: "/demo",
    name: "EchartDemo",
    component: EchartDemo,
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
