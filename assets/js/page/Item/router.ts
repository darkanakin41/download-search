import {RouteConfig} from "vue-router";

const itemRoutes: Array<RouteConfig> = [
    {
        name: 'item-search',
        meta: {
            title: 'Recherche',
            pageTitle: true,
            leftMenu: true,
            icon: 'fa fa-search',
        },
        path: '/item/search',
        component: () => {
            return import(/* webpackChunkName: 'item' */ "./Search.vue")
        }
    },
    {
        name: 'item-view',
        meta: {
            pageTitle: false,
            leftMenu: false,
        },
        path: '/item/:id/view/',
        component: () => {
            return import(/* webpackChunkName: 'item' */ "./View.vue")
        }
    },
];

export default itemRoutes;
