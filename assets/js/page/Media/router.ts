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
        name: 'media-agenda',
        meta: {
            title: 'Agenda des Épisodes',
            pageTitle: true,
            leftMenu: true,
            icon: 'far fa-calendar-alt',
        },
        path: '/media/agenda',
        component: () => {
            return import(/* webpackChunkName: 'media' */ "./AgendaMedia.vue")
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
        path: '/media/:id',
        component: () => {
            return import(/* webpackChunkName: 'media' */ "./Display.vue")
        },
        children:[
            {
                name: 'media-view-items',
                meta: {
                    title: 'Téléchargement',
                    pageTitle: false,
                    leftMenu: false,
                },
                path: '/media/:id/items',
                component: () => {
                    return import(/* webpackChunkName: 'media' */ "./Display/Items.vue")
                },
            },
            {
                name: 'media-view-seasons',
                meta: {
                    title: 'Saisons',
                    pageTitle: false,
                    leftMenu: false,
                },
                path: '/media/:id/seasons',
                component: () => {
                    return import(/* webpackChunkName: 'media' */ "./Display/Seasons.vue")
                },
            },
        ]
    },
];

export default mediaRoutes;
