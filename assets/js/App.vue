<template>
    <v-app dark>
        <v-navigation-drawer app v-model="drawer">
            <LeftMenu :items="leftMenuItems" />
        </v-navigation-drawer>
        <v-toolbar app id="top-bar">
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title>{{ pageName }}</v-toolbar-title>
            <v-spacer></v-spacer>
            <template v-if="isAuthenticated">
                <NotificationMenu />
            </template>
        </v-toolbar>
        <v-content>
            <Loading :displayed="loading" />
                <router-view></router-view>
        </v-content>
        <v-footer app height="auto">
            <p class="copyright">
                <i class="far fa-copyright"></i> Copyright Pierre LEJEUNE, tous droits réservés.
            </p>
            <div class="social">
                <a href="https://gitlab.com/pierrelejeune/download-search" target="_blank" class="gitlab"><i class="fab fa-gitlab"></i></a>
                <a href="https://twitter.com/dark_csgo" target="_blank" class="twitter"><i class="fab fa-twitter"></i></a>
                <a href="https://www.linkedin.com/in/pierre-lejeune/" target="_blank" class="linkedin"><i class="fab fa-linkedin-in"></i></a>
            </div>
        </v-footer>
    </v-app>
</template>

<script lang="ts">
    import {Component, Prop, Vue, Watch} from "vue-property-decorator";
    import {Action, Getter} from 'vuex-class';
    import Loading from "./components/Block/Loading.vue";
    import LeftMenu from "./components/Block/LeftMenu";
    import TopBar from "./components/Block/TopBar";

    import leftmenuItems from "./config/leftmenu";
    import Login from "./app/Security/Login.vue";
    import NotificationList from "./components/Block/NotificationList.vue";
    import NotificationMenu from "./components/Block/NotificationMenu.vue";

    const namespace: string = 'security';

    @Component({
        components: {NotificationMenu, Login, LeftMenu, Loading, TopBar}
    })
    export default class App extends Vue {
        @Prop({type: Boolean, default: false}) loading;
        @Prop({type: String, default: ""}) title;

        @Action('checkAuthentification', {namespace}) checkAuthentification: any;
        @Getter('isAuthenticated', {namespace}) isAuthenticated: Boolean;
        @Getter('isLoading', {namespace}) isCheckingAuthentication: Boolean;

        leftMenuItems = leftmenuItems;
        pageName = "";

        data(){
            return {
                drawer: true,
            }
        }
        mounted() {
            this.checkAuthentification();
        }

        @Watch('$route')
        onRouteChange() {
            let currentRoute = this.$route;
            if (currentRoute.meta.title) {
                document.title = currentRoute.meta.title + " | " + this.title;
                if (currentRoute.meta.pageTitle === true) {
                    this.pageName = currentRoute.meta.title;
                } else {
                    this.pageName = "";
                }
            } else {
                document.title = this.title;
                this.pageName = "";
            }

            if (currentRoute.meta.connected === true && !this.isAuthenticated) {
                this.$router.push({name: 'home'});
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../libs/theming/mixins";
    @import "../scss/common/config";

    @include importGoogleFont("Roboto|Material Icons");

    footer {
        margin-top: 15px;

        a {
            color: inherit;
            @include opacity(.8);
            @include transition(all .35s linear);

            &:hover {
                @include opacity(1);
                @include transition(all .15s linear);
            }
        }
    }

    .v-footer {
        flex-direction: row;
        justify-content: space-between;
        align-self: center;

        margin: 0;
        padding: 0;
        font-size: 1rem;

        & > * {
            line-height: 1.5;
            padding: .5rem .7rem;
        }
    }

    .v-toolbar{
        &#top-bar{
            background : $mainColor;
        }
    }

    @media (max-width: $breakpointSmall){
        .v-footer{
            flex-direction: column;
            height: auto !important;
        }
    }
</style>
