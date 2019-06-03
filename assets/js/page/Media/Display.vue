<template>
    <div>
        <Loading v-if="loading" :displayed="loading" :fixed="false" />
        <Header v-if="!loading && media" :media="media" />
        <TabbedMenu v-if="!loading" :items="pageRoutes" :isCentered="true"/>
        <div class="grid-container" v-if="!loading">
            <router-view></router-view>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import Loading from "../../components/Block/Loading.vue";

    import routes from "./router";

    import MediaAPI from "../../app/API/MediaAPI";
    import Media from "../../app/Entity/Media";
    import Header from "../../app/Component/Media/Header.vue";
    import {RouteConfig} from "vue-router";
    import TabbedMenu from "../../components/Block/TabbedMenu.vue";

    @Component({
        components: {TabbedMenu, Header, Loading}
    })
    export default class Display extends Vue {
        media: Media;
        loading: boolean;
        pageRoutes: Array<RouteConfig>;

        data() {
            return {
                media: null,
                loading: false,
                items: [],
                pageRoutes: [],
            }
        }

        mounted() {
            this.loading = true;
            let id = parseInt(this.$route.params.id);
            MediaAPI.get(id, (media) => {
                this.media = media;
                this.loading = false;
                this.refreshRoutes();
            });
        }

        refreshRoutes(){
            if(this.media.category === 'tv' || this.media.category === 'animes'){
                let route:Array<RouteConfig>|undefined = this.getRouteByName(routes, "media-view");
                if(route !== undefined && route.children !== undefined){
                    this.pageRoutes = route.children;
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>
