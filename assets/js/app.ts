import 'foundation-sites/dist/css/foundation.min.css';
import 'foundation-sites/dist/js/foundation.min';

import 'select2/dist/css/select2.min.css';
import 'select2/dist/js/select2.full.min';
import 'select2/dist/js/i18n/fr';

require('../scss/select2.foundation.scss');
require('../scss/app.scss');

import '@fortawesome/fontawesome-free/css/all.min.css';

import Vue from 'vue';
import App from './App.vue';

import {router} from "./config/router";

const app = new Vue({
    el: '#app',
    props: ['loading','pagename'],
    components: {App},
    template: '<App :pageName="pagename" :loading="loading"></App>',
    router,
});

let title = document.getElementsByTagName("title")[0].innerHTML;

router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title + " | " + title;
        if (to.meta.pageTitle === true) {
            app.pagename = to.meta.title;
        }else{
            app.pagename = null;
        }
    } else {
        document.title = title;
        app.pagename = null;
    }
    app.loading = true;
    window.scroll(0, 0);
    next();
});

router.afterEach((to, from) => {
    app.loading = false;
});
