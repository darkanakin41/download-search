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
    {
        name: 'account-agenda',
        meta: {
            title: 'Mon agenda',
            pageTitle: true,
            leftMenu: true,
            icon: 'far fa-calendar-alt',
            connected: true,
        },
        path: '/account/agenda',
        component: () => {
            return import(/* webpackChunkName: 'account' */ "./AgendaAccount.vue")
        }
    },
];

export default accountRoutes;
