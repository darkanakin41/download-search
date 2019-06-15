import $ from 'jquery';
require('../scss/app.scss');

import '@fortawesome/fontawesome-free/css/all.min.css';

import Vue from 'vue';

import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css'
Vue.use(Vuetify, {
    theme: {
        primary: "#79c44f",
    }
});

import App from './App.vue';

import router from "./config/router";
import "./app/Mixin/router";
import "./app/Mixin/date";

import store from "./app/Store";

const app = new Vue({
    el: '#app',
    props: ['loading','title'],
    components: {App},
    template: '<App :title="title" :loading="loading"></App>',
    router,
    store
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
