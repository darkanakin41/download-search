import {RouteConfig} from "vue-router";

const mediaRoutes: Array<RouteConfig> = [
    {
        name: 'media-last',
        meta: {
            title: 'Derniers médias',
            pageTitle: true,
            leftMenu: true,
            icon: 'far fa-clock',
        },
        path: '/media/last',
        component: () => {
            return import(/* webpackChunkName: 'media' */ "./Last.vue")
        }
    },
    {
        name: 'media-index',
        meta: {
            title: 'Tous les médias',
            pageTitle: true,
            leftMenu: true,
            icon: 'fas fa-video',
        },
        path: '/media/index',
        component: () => {
            return import(/* webpackChunkName: 'media' */ "./Index.vue")
        }
    },
    {
        name: 'media-view',
        meta: {
            pageTitle: false,
            leftMenu: false,
        },
        path: '/media/:id/view/',
        component: () => {
            return import(/* webpackChunkName: 'media' */ "./Display.vue")
        }
    },
];

export default mediaRoutes;
