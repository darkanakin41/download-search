<template>
    <div>
        <div class="callout success">
            <div class="grid-container">
                <h1 class="title">Bienvenue sur Download Search</h1>
                <p>Cette application vous permet de rechercher des liens de téléchargements parmi les suites suivants :</p>
                <ul>
                    <li v-for="source in sources">
                        <a :href="source.baseUrl" target="_blank">{{source.title}}</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="text-center">
            <router-link :to="{name: 'item-search'}" exact class="button custom big">
                <i class="fa fa-search"></i> Accéder à la recherche
            </router-link>
        </div>
        <section class="grid-container">
            <h2 class="section-title">
                Derniers médias récupérés
            </h2>
            <Loading v-if="mediasLoading" :fixed="false" />
            <Grid v-if="!mediasLoading" :items="lastDownloadedMedias" :pagination="false" />
        </section>
        <section class="grid-container">
            <h2 class="section-title">
                Derniers médias mis à jour
            </h2>
            <Loading v-if="mediasLoading" :fixed="false" />
            <Grid v-if="!mediasLoading" :items="lastUpdatedMedias" :pagination="false" />
        </section>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import Source from "../app/Entity/Source";
    import SourceAPI from "../app/API/SourceAPI";
    import MediaAPI from "../app/API/MediaAPI";
    import Media from "../app/Entity/Media";
    import Grid from "../app/Component/Media/Grid.vue";
    import Loading from "../components/Block/Loading.vue";

    @Component({
        components: {Loading, Grid}
    })
    export default class Home extends Vue {
        sources: Array<Source>;
        lastUpdatedMedias: Array<Media>;
        lastDownloadedMedias: Array<Media>;
        mediasLoading: Boolean = false;

        data() {
            return {
                sources: [],
                lastUpdatedMedias: [],
                lastDownloadedMedias: [],
                mediasLoading: false,
            }
        }

        mounted() {
            SourceAPI.getAll((items) => {
                this.sources = items;
            });
            this.mediasLoading = true;
            MediaAPI.getAll((items) => {
                items.sort((a: Media, b: Media) => {
                    return a.updated < b.updated;
                });
                this.lastUpdatedMedias = items.slice(0, 6);
                items.sort((a: Media, b: Media) => {
                    return a.id < b.id;
                });
                this.lastDownloadedMedias = items.slice(0, 6);
                this.mediasLoading = false;
            })
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../libs/theming/mixins";
    @import "../../scss/common/config";

    section{
        .section-title{
            font-size : 1.2rem;
            font-weight: $weightBold;
            &::after{
                display:block;
                height: 4px;
                content: " ";
                background : linear-gradient(to right, $mainColor, transparentize($mainColor, 1));
                width: 65%;
            }
        }
        .grid{
            margin : 0;
        }
    }
</style>
