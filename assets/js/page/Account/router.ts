import {RouteConfig} from "vue-router";

const accountRoutes: Array<RouteConfig> = [
    {
        name: 'account-logout',
        meta: {
            title: 'Deconnexion',
            pageTitle: true,
            leftMenu: true,
            icon: 'fas fa-sign-out-alt',
        },
        path: '/account/logout',
        component: () => {
            return import(/* webpackChunkName: 'media' */ "./Logout.vue")
        }
    },
];

export default accountRoutes;
