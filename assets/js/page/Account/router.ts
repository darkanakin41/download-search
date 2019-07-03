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
    {
        name: 'account-profile',
        meta: {
            title: 'Mon profile',
            pageTitle: true,
            leftMenu: true,
            icon: 'far fa-user',
            connected: true,
        },
        path: '/account/profile',
        component: () => {
            return import(/* webpackChunkName: 'account' */ "./Profile.vue")
        },
        children: [
            {
                name: 'account-profile-password',
                meta: {
                    title: 'Modifier mon mot de passe',
                    pageTitle: true,
                    leftMenu: false,
                    connected: true,
                },
                path: '/account/profile/password',
                component: () => {
                    return import(/* webpackChunkName: 'account' */ "./Profile/ChangePasswordPage.vue")
                },
            },
            {
                name: 'account-profile-notifications',
                meta: {
                    title: 'Mes notifications',
                    pageTitle: true,
                    leftMenu: false,
                    connected: true,
                },
                path: '/account/profile/notifications',
                component: () => {
                    return import(/* webpackChunkName: 'account' */ "./Profile/NotificationsPage.vue")
                },
            },
        ]
    },
    {
        name: 'security-sign-out',
        meta: {
            title: 'Déconnexion',
            pageTitle: true,
            leftMenu: true,
            icon: 'fas fa-sign-out-alt',
            connected: true,
        },
        path: '/security/sign-out',
        component: () => {
            return import(/* webpackChunkName: 'security' */ "../Security/Logout.vue")
        }
    },
];

export default accountRoutes;
