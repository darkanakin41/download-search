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
    {
        name: 'security-sign-up',
        meta: {
            title: 'Inscription',
            pageTitle: true,
            leftMenu: true,
            icon: 'fas fa-user-plus',
        },
        path: '/security/sign-up',
        component: () => {
            return import(/* webpackChunkName: 'security' */ "./Registration.vue")
        }
    },
    {
        name: 'security-sign-out',
        meta: {
            title: 'Déconnexion',
            pageTitle: true,
            leftMenu: true,
            icon: 'fas fa-sign-out-alt',
        },
        path: '/security/sign-out',
        component: () => {
            return import(/* webpackChunkName: 'security' */ "./Logout.vue")
        }
    },
];

export default securityRoutes;
