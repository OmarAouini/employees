import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      alias: "/index",
      name: "index",
      component: () => import("./App.vue")
    }
    /*
    {
      path: "/employees",
      name: "employees",
      component: () => import("./components/Employees")
    },
    {
      path: "/employees/add",
      name: "add",
      component: () => import("./components/AddEmployee")
    }
    */
  ]
});