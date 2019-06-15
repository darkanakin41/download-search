<template>
    <v-bottom-sheet v-model="open">
        <template v-if="this.season !== undefined">
            <v-card>
                <v-toolbar>
                    <v-toolbar-title>Saison {{ season.number }}</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-toolbar-items>
                        <v-btn flat v-on:click="close()">
                            <i class="far fa-times-circle"></i>
                        </v-btn>
                    </v-toolbar-items>
                </v-toolbar>
                <v-sheet>
                    <Loading :displayed="loading" :position="'absolute'" />
                    <div v-if="season.description !== ''" class="resume">
                        <i class="fa fa-book-open"></i> Résumé
                        <p>{{season.description}}</p>
                    </div>
                    <FlexTable v-if="!loading" :itemsInput="episodes" :configInput="configTable" />
                </v-sheet>
            </v-card>
        </template>
    </v-bottom-sheet>
</template>

<script lang="ts">
    import {Component, Prop, Vue, Watch} from "vue-property-decorator";
    import MediaSeason from "../../Entity/MediaSeason";
    import MediaSeasonEpisode from "../../Entity/MediaSeasonEpisode";
    import MediaSeasonEpisodeAPI from "../../API/MediaSeasonEpisodeAPI";
    import Loading from "../../../components/Block/Loading.vue";
    import FlexTable from "../../../components/Table/FlexTable.vue";

    import configTable from "../../../config/table/media_season_episode";

    @Component({
        components: {FlexTable, Loading}
    })
    export default class Drawer extends Vue {
        @Prop({type: MediaSeason}) season;
        episodes: Array<MediaSeasonEpisode>;
        configTable = configTable;

        loading: Boolean;
        open: Boolean;

        data() {
            return {
                loading: false,
                open: false,
            }
        }

        close() {
            this.episodes = [];
            this.open = false;
            setTimeout(() => {
                this.$emit("input", undefined);
            }, 400)
        }

        @Watch('season')
        onSeasonUpdate() {
            if (this.season === undefined) {
                return;
            }
            this.loading = true;
            this.open = true;
            MediaSeasonEpisodeAPI.getForSeason(this.season.id, (episodes: Array<MediaSeasonEpisode>) => {
                this.episodes = episodes;
                this.loading = false;
            });
        }

        @Watch('open')
        onOpenUpdate() {
            let body = document.body;
            if (this.open) {
                body.classList.add('no-scroll');
            } else {
                body.classList.remove('no-scroll');
            }
        }
    }
</script>

<style lang="scss">
    @import "../../../../libs/theming/mixins";
    @import "../../../../scss/common/config";

    .v-bottom-sheet {
        background: #101010;
        color: white;
        max-height: 70% !important;
        &.v-dialog{
            overflow: auto;
        }

        .v-sheet{
            position : relative;
            .resume{
                padding: .5rem .7rem;
            }
            .table-list {
                background: white;
            }
        }
    }
</style>
