<template>
    <div>
        <div class="jumbotron green">
            <h1 class="title">Bienvenue sur Download Search</h1>
            <p>Cette application vous permet de rechercher des liens de téléchargements parmi les sites suivants :</p>
            <ul>
                <li v-for="source in sourcesState.sources">
                    <a :href="source.baseUrl" target="_blank">{{source.title}}</a>
                </li>
            </ul>
        </div>

        <v-divider />

        <div class="text-center">
            <v-btn color="success" :to="{name: 'item-search'}">
                <i class="fa fa-search"></i> Accéder à la recherche
            </v-btn>
        </div>

        <v-divider />

        <v-card class="card-media-grid">
            <v-toolbar>
                <v-toolbar-title>Derniers médias sortis</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-items class="hidden-sm-and-down">
                    <v-btn flat :to="{name:'media-last-released'}">Voir plus</v-btn>
                </v-toolbar-items>
            </v-toolbar>
            <v-sheet>
                <Loading :displayed="mediasLoading" :position="'absolute'" />
                <Grid v-if="!mediasLoading" :items="lastReleasedMedias" :config="mediaGridConfig()" />
            </v-sheet>
        </v-card>

        <v-divider />

        <v-card class="card-media-grid">
            <v-toolbar>
                <v-toolbar-title>Derniers médias mis à jour</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-items class="hidden-sm-and-down">
                    <v-btn flat :to="{name:'media-last-updated'}">Voir plus</v-btn>
                </v-toolbar-items>
            </v-toolbar>
            <v-sheet>
                <Loading :displayed="mediasLoading" :position="'absolute'" />
                <Grid v-if="!mediasLoading" :items="lastUpdatedMedias" :config="mediaGridConfig()" />
            </v-sheet>
        </v-card>

        <v-divider />

        <v-card class="card-media-grid">
            <v-toolbar>
                <v-toolbar-title>Derniers médias récupérés</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-items class="hidden-sm-and-down">
                    <v-btn flat :to="{name:'media-index'}">Voir plus</v-btn>
                </v-toolbar-items>
            </v-toolbar>
            <v-sheet>
                <Loading :displayed="mediasLoading" :position="'absolute'" />
                <Grid v-if="!mediasLoading" :items="lastDownloadedMedias" :config="mediaGridConfig()" />
            </v-sheet>
        </v-card>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import {Action, State} from 'vuex-class';
    import MediaAPI from "../app/API/MediaAPI";
    import Media from "../app/Entity/Media";
    import Grid from "../components/Grid/Grid.vue";
    import Card from "../app/Component/Media/Card.vue";
    import Loading from "../components/Block/Loading.vue";
    import GridConfig from "../components/Grid/GridConfig";
    import {SourceState} from "../app/Store/Source/types";

    const namespace: string = 'source';

    @Component({
        components: {Loading, Grid}
    })
    export default class Home extends Vue {
        @State('source') sourcesState: SourceState;
        @Action('getAll', {namespace}) refreshSources: any;

        lastUpdatedMedias: Array<Media>;
        lastDownloadedMedias: Array<Media>;
        lastReleasedMedias: Array<Media>;
        mediasLoading: Boolean = false;

        data() {
            return {
                lastUpdatedMedias: [],
                lastDownloadedMedias: [],
                lastReleasedMedias: [],
                mediasLoading: false,
            }
        }

        mounted() {
            if (!this.sourcesState.loaded) {
                this.refreshSources();
            }
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
                items.sort((a: Media, b: Media) => {
                    return a.releaseDate < b.releaseDate;
                });
                this.lastReleasedMedias = items.slice(0, 6);
                this.mediasLoading = false;
            })
        }

        mediaGridConfig() {
            return new GridConfig({
                component: Card,
                itemsPerRowForced: 6,
                nbRowsForced: 1,
                pagination: false,
                to: (item: Media) => {
                    return {name: 'media-view-items', params: {'id': item.id}};
                }
            });
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../libs/theming/mixins";
    @import "../../scss/common/config";

    section {
        .section-title {
            font-size: 1.2rem;
            font-weight: $weightBold;

            &::after {
                display: block;
                height: 4px;
                content: " ";
                background: linear-gradient(to right, $mainColor, transparentize($mainColor, 1));
                width: 65%;
            }
        }

        .grid {
            margin: 0;
        }
    }

    .v-divider {
        margin: 10px 0;
        border: transparent;
    }

    .card-media-grid {
        .v-sheet {
            position: relative;
            min-height: 100px;
        }
    }
</style>
