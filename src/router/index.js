import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/home/index.vue";
// import Login from "../views/login/index.vue";

Vue.use(VueRouter);

const routes = [
    // 重定向
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: "/login",
        name: "Login",
        component: () =>
            import("../views/login"),
    },
    {
        path: "/home",
        name: "Home",
        component: () =>
            import("../views/home"),
    },
];

const router = new VueRouter({
    base: '/',
    routes,
});

export default router;