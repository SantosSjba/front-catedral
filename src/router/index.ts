import { createRouter, createWebHistory } from "vue-router";
import requestRoutes from "../modules/request/router/index";

const routes = [...requestRoutes];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
