import {RouteConfig} from "vue-router";

const mediaRoutes: Array<RouteConfig> = [
    {
        name: 'media-last-released',
        meta: {
            title: 'Dernières Sorties',
            pageTitle: true,
            leftMenu: true,
            icon: 'far fa-clock',
        },
        path: '/media/last-released',
        component: () => {
            return import(/* webpackChunkName: 'media' */ "./LastReleased.vue")
        }
    },
    {
        name: 'media-last-updated',
        meta: {
            title: 'Dernières MAJ',
            pageTitle: true,
            leftMenu: true,
            icon: 'fas fa-sync-alt',
        },
        path: '/media/last-updated',
        component: () => {
            return import(/* webpackChunkName: 'media' */ "./LastUpdated.vue")
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
