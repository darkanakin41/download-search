<template>
    <v-container fluid>
        <v-card>
            <v-toolbar>
                <v-spacer></v-spacer>
                <TabbedFilter v-if="!loading" :valuesInput="filterValues" v-model="filter" />
            </v-toolbar>
            <v-sheet>
                <Loading :displayed="loading" />
                <Grid v-if="!loading && itemsFiltered.length > 0" :config="mediaGridConfig()" :items="itemsFiltered" />
                <div v-if="!loading && itemsFiltered.length === 0" class="callout warning text-center">
                    Aucun résultat, veuillez renseigner une valeur valide dans le champ de recherche
                </div>
            </v-sheet>
        </v-card>
    </v-container>
</template>

<script lang="ts">
    import {Component, Vue, Watch} from "vue-property-decorator";
    import FlexTable from "../../components/Table/FlexTable.vue";
    import Grid from "../../components/Grid/Grid.vue";
    import Loading from "../../components/Block/Loading.vue";
    import TabbedFilter from "../../components/Block/TabbedFilter";

    import tableConfig from "../../config/table/search";

    import MediaAPI from "../../app/API/MediaAPI";
    import Media from "../../app/Entity/Media";
    import Card from "../../app/Component/Media/Card.vue";
    import GridConfig from "../../components/Grid/GridConfig";

    @Component({
        components: {Grid, Loading, FlexTable, TabbedFilter}
    })
    export default class LastUpdated extends Vue {
        loading = false;
        filter = "";
        itemsInput: Array<Media> = [];
        itemsFiltered: Array<Media> = [];

        data() {
            return {
                loading: false,
                itemsInput: [],
                itemsDisplayed: [],
                tableConfig: tableConfig,
                filterValues: ['animes', 'movie', 'tv']
            }
        }

        mounted() {
            this.loading = true;
            MediaAPI.getAll((items) => {
                this.itemsInput = items;
                this.sortItems();
                this.onFilterChange();
                this.loading = false;
            });
        }

        sortItems() {
            this.itemsInput.sort((a: Media, b: Media) => {
                return a.updated < b.updated;
            });
        }

        mediaGridConfig() {
            return new GridConfig({
                component: Card,
                to: (item: Media) => {
                    return {name: 'media-view-items', params: {'id': item.id}};
                }
            });
        }

        @Watch('filter')
        onFilterChange() {
            this.loading = true;
            let filterSet: Boolean = (this.filter !== null && this.filter.trim() !== "");

            this.itemsFiltered = this.itemsInput.filter(item => {
                let filterResult = true;
                if (filterSet) {
                    filterResult = item.category === this.filter;
                }

                return filterResult;
            });
            this.loading = false;
        }
    }
</script>

<style lang="scss" scoped>
</style>
