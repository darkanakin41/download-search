import {RouteConfig} from "vue-router";

const mediaRoutes: Array<RouteConfig> = [
    {
        name: 'media-index',
        meta: {
            title: 'Liste des médias',
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
