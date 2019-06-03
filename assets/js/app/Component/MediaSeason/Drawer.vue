<template>
    <div class="drawer-container" :class="{open:open}">
        <div class="drawer-overlay" v-on:click="close()"></div>
        <div class="season-drawer">
            <template v-if="this.season !== undefined">
                <div class="drawer-header">
                    <h3 class="drawer-title">Saison {{ this.season.number }}</h3>
                    <a v-on:click="close()" class="close-button">
                        <i class="far fa-times-circle"></i>
                    </a>
                </div>
                <Loading v-if="loading" :displayed="loading" :fixed="false" />
                <div class="drawer-body" v-if="!loading">
                    <div v-if="season.description !== ''" class="resume">
                        <i class="fa fa-book-open"></i> Résumé
                        <p>{{season.description}}</p>
                    </div>
                    <FlexTable :itemsInput="episodes" :configInput="configTable"/>
                </div>
            </template>
        </div>
    </div>
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
        onOpenUpdate(){
            let body = document.body;
            if(this.open){
                body.classList.add('no-scroll');
            }else{
                body.classList.remove('no-scroll');
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../../../libs/theming/mixins";
    @import "../../../../scss/common/config";

    .drawer-container {
        @include opacity(0);
        visibility: hidden;
        @include transition(opacity .5 ease, visibility .5s ease);

        .drawer-overlay {
            background: transparentize(black, .5);
            position: fixed;
            bottom: 0;
            left: 0;
            top: 0;
            right: 0;

            overflow: hidden;
        }

        .season-drawer {
            background: #101010;
            color: white;

            z-index: 1;

            position: fixed;
            bottom: 0;
            right: 0;
            left: 0;
            max-height: 70%;
            overflow: auto;

            .drawer-header {
                .drawer-title {
                    margin: 0;
                    font-size: 1.1rem;
                    padding: .5rem .7rem;
                    background: transparentize(black, .5);
                }

                .close-button {
                    position: absolute;
                    top: .5rem;
                    right: .7rem;
                    font-size : 1rem;
                    @include opacity(.6);
                    color:white;
                    &:hover{
                        color:white;
                        @include opacity(1);
                    }
                }
            }

            .drawer-body{
                font-size : .9rem;
                padding : .5rem .7rem;
                max-height: calc(100% - 41px);
                overflow:auto;
                .table-list{
                    background: transparent;
                }
            }
        }

        &.open {
            @include opacity(1);
            visibility: visible;

            .drawer-overlay {
                cursor: pointer;
            }
        }
    }
</style>
