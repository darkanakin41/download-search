import $ from 'jquery';
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
    props: ['loading','title'],
    components: {App},
    template: '<App :title="title" :loading="loading"></App>',
    router,
});

app.title = document.getElementsByTagName("title")[0].innerHTML;

router.beforeEach((to, from, next) => {
    app.loading = true;
    window.scroll(0, 0);
    next();
});

router.afterEach((to, from) => {
    app.loading = false;
    $("#drawer").find('a[data-close]').trigger('click');
});
