import {RouteConfig} from "vue-router";

const accountRoutes: Array<RouteConfig> = [
    {
        name: 'account-subscription',
        meta: {
            title: 'Mes abonnements',
            pageTitle: true,
            leftMenu: true,
            icon: 'far fa-bell',
            connected: true,
        },
        path: '/account/subscription',
        component: () => {
            return import(/* webpackChunkName: 'account' */ "./Subscription.vue")
        }
    },
];

export default accountRoutes;
