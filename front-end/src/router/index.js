import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/Home.vue";
import Login from "../pages/Login.vue";
import OwnerHP from "../pages/OwnerHP.vue";
import OwnerList from "../pages/OwnerList.vue";
import EchartDemo from "../pages/EchartDemo.vue";
import Play from "../pages/Play.vue";

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
    path: "/owner",
    name: "OwnerHP",
    component: OwnerHP,
  },
  {
    path: "/owner/ownerlist",
    name: "OwnerList",
    component: OwnerList,
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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
