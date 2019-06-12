import {RouteConfig} from "vue-router";

const securityRoutes: Array<RouteConfig> = [
    {
        name: 'security-sign-in',
        meta: {
            title: 'Connexion',
            pageTitle: true,
            leftMenu: true,
            icon: 'fas fa-sign-in-alt',
        },
        path: '/security/sign-in',
        component: () => {
            return import(/* webpackChunkName: 'security' */ "./Login.vue")
        }
    },
];

export default securityRoutes;
