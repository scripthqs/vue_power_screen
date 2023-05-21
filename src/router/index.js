import { createRouter, createWebHistory } from "vue-router";
import PowerView from "@/views/power-view.vue";
import SvgView from "@/views/svg-view.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "powerview",
      component: PowerView,
    },
    {
      path: "/svgview",
      name: "svgview",
      component: SvgView,
    },
  ],
});

export default router;
