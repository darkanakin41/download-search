import Vue from 'vue';
import VueRouter, {RouteConfig} from "vue-router";

import itemRoutes from "../page/Item/router";

Vue.use(VueRouter);

const baseRoutes: Array<RouteConfig> = [
    {
        name: 'home',
        meta: {
            title: 'Accueil',
            pageTitle: true,
        },
        path: '/',
        component: () => {
            return import(/* webpackChunkName: 'home' */ "../page/HomePage.vue")
        }
    },
];

const routes: Array<RouteConfig> = baseRoutes.concat(itemRoutes);

export const router = new VueRouter({
    mode: 'hash',
    base: process.env.ROUTER_BASE,
    linkActiveClass: '',
    linkExactActiveClass: 'active',
    routes: routes
});
