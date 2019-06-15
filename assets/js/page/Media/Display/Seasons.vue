<template>
    <div>
        <Loading :displayed="loading" />
        <Grid v-if="!loading && items.length > 0" :config="gridConfig()" :items="items" />
        <Drawer v-model="seasonDisplayed" :season="seasonDisplayed" />
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import Loading from "../../../components/Block/Loading.vue";

    import Item from "../../../app/Entity/Item";
    import Card from "../../../app/Component/MediaSeason/Card.vue";
    import MediaSeasonAPI from "../../../app/API/MediaSeasonAPI";
    import Grid from "../../../components/Grid/Grid.vue";
    import GridConfig from "../../../components/Grid/GridConfig";
    import MediaSeason from "../../../app/Entity/MediaSeason";
    import Drawer from "../../../app/Component/MediaSeason/Drawer.vue";

    @Component({
        components: {Drawer, Grid, Card, Loading}
    })

    export default class Seasons extends Vue {
        items: Array<Item>;
        loading: Boolean;
        seasonDisplayed: MediaSeason | undefined;

        data() {
            return {
                loading: false,
                items: [],
                seasonDisplayed: undefined,
                episodes: [],
            }
        }

        gridConfig() {
            return new GridConfig({
                component: Card,
                itemsPerRowForced: 6,
                onclick: (item: MediaSeason) => {
                    this.seasonDisplayed = item;
                    return false;
                }
            });
        }

        mounted() {
            let mediaId = parseInt(this.$route.params.id);
            this.loading = true;
            MediaSeasonAPI.getForMedia(mediaId, (seasons) => {
                this.items = seasons;
                this.loading = false;
            });
        }

    }
</script>

<style lang="scss" scoped>
    @import "../../../../libs/theming/mixins";
    @import "../../../../scss/common/config";
</style>
