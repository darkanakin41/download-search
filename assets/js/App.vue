<template>
    <div id="page-wrapper">
        <div class="off-canvas position-left" id="drawer" data-off-canvas data-transition="overlap">
            <LeftMenu :items="leftMenuItems" />
        </div>
        <div class="off-canvas-content" id="content" data-off-canvas-content>
            <TopBar :pagename="pageName" />
            <Loading :displayed="loading" />
            <router-view></router-view>
            <footer>
                <p class="copyright">
                    <i class="far fa-copyright"></i> Copyright Pierre LEJEUNE, tous droits réservés.
                </p>
                <div class="social">
                    <a href="https://gitlab.com/pierrelejeune/download-search" target="_blank" class="gitlab"><i class="fab fa-gitlab"></i></a>
                    <a href="https://twitter.com/dark_csgo" target="_blank" class="twitter"><i class="fab fa-twitter"></i></a>
                    <a href="https://www.linkedin.com/in/pierre-lejeune/" target="_blank" class="linkedin"><i class="fab fa-linkedin-in"></i></a>
                </div>
            </footer>
        </div>
    </div>
</template>

<script lang="ts">
    import $ from 'jquery';

    import {Component, Prop, Vue, Watch} from "vue-property-decorator";
    import Loading from "./components/Block/Loading.vue";
    import LeftMenu from "./components/Block/LeftMenu";
    import TopBar from "./components/Block/TopBar";

    import leftmenuItems from "./config/leftmenu";

    @Component({
        components: {LeftMenu, Loading, TopBar}
    })
    export default class App extends Vue {
        @Prop({type: Boolean, default: false}) loading;
        @Prop({type: String, default: ""}) title;
        leftMenuItems = leftmenuItems;
        pageName = "";

        mounted() {
            $(document).foundation();
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
        }
    }
</script>

<style lang="scss" scoped>
    @import "../libs/theming/mixins";
    @import "../scss/common/config";

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
</style>
