import {RouteConfig} from "vue-router";

const itemRoutes: Array<RouteConfig> = [
    {
        name: 'search',
        meta: {
            title: 'Recherche',
            pageTitle: true,
            leftMenu: true,
            icon: 'fa fa-search',
        },
        path: '/item/search',
        component: () => {
            return import(/* webpackChunkName: 'item' */ "./SearchPage.vue")
        }
    },
    {
        name: 'view',
        meta: {
            pageTitle: false,
            leftMenu: false,
        },
        path: '/item/:id/view/',
        component: () => {
            return import(/* webpackChunkName: 'item' */ "./ViewPage.vue")
        }
    },
];

export default itemRoutes;
