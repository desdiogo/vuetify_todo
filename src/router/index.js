import Vue from "vue";
import VueRouter from "vue-router";
import Todo from "../views/Todo";
import goto from "vuetify/es5/services/goto"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Todo",
    component: Todo,
  },
  {
    path: "/about",
    name: "Sobre",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${process.env.VUE_APP_TITLE} - ${to.name}`;
  next();
});

router.afterEach((to, from) => {
  goto(0, {duration: 0})
})

export default router;
