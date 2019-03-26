import Vue from "vue";
import VueRouter from "vue-router";
import HomeIndex from "@/pages/home/homeIndex/HomeIndex";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/homeIndex",
    },
    {
      path: "/homeIndex",
      component: HomeIndex,
    },
    {
      path: "/homePage1",
      component: () => import(/* webpackChunkName: "homePage1" */ "./homePage1/HomePage1"),
    },
    {
      path: "/homePage2",
      component: () => import(/* webpackChunkName: "homePage2" */ "./homePage2/HomePage2"),
    },
    {
      path: "*",
      redirect: "/homeIndex",
    },
  ],
});

export default router;
