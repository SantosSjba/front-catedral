import { createRouter, createWebHashHistory } from "vue-router";
import requestRoutes from "../modules/request/router/index";

const routes = [...requestRoutes];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
