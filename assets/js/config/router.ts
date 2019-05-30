import Vue from 'vue';
import VueRouter, {RouteConfig} from "vue-router";

import accountRoutes from "../page/Account/router";
import itemRoutes from "../page/Item/router";
import mediaRoutes from "../page/Media/router";

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
            return import(/* webpackChunkName: 'home' */ "../page/Home.vue")
        }
    },
];

const routes: Array<RouteConfig> = baseRoutes.concat(accountRoutes, itemRoutes, mediaRoutes);

export const router = new VueRouter({
    mode: 'hash',
    base: process.env.ROUTER_BASE,
    linkActiveClass: '',
    linkExactActiveClass: 'active',
    routes: routes
});
