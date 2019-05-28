import Vue from 'vue';
import VueRouter, {RouteConfig} from "vue-router";

Vue.use(VueRouter);

const baseRoutes: Array<RouteConfig> = [
    {
        name: 'home',
        meta: {
            title: 'Home',
            pageTitle: true,
        },
        path: '/',
        component: () => {
            return import(/* webpackChunkName: 'home' */ "../page/HomePage.vue")
        }
    }
];

const routes: Array<RouteConfig> = baseRoutes.concat([]);

export const router = new VueRouter({
    mode: 'hash',
    base: process.env.ROUTER_BASE,
    linkActiveClass: '',
    linkExactActiveClass: 'active',
    routes: routes
});
