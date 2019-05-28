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
            </footer>
        </div>
    </div>
</template>

<script lang="ts">
    import $ from 'jquery';

    import {Component, Prop, Vue} from "vue-property-decorator";
    import Loading from "./components/Block/Loading.vue";
    import LeftMenu from "./components/Block/LeftMenu";
    import TopBar from "./components/Block/TopBar";

    import leftmenuItems from "./config/leftmenu";

    @Component({
        components: {LeftMenu, Loading, TopBar}
    })
    export default class App extends Vue {
        @Prop({type: Boolean, default: false}) loading;
        @Prop({type: String, default: ""}) pageName;
        leftMenuItems = leftmenuItems;

        mounted(){
            $(document).foundation();
        }
    }
</script>

<style lang="scss" scoped>

</style>
