<template>
    <div class="grid-container">
        <TabbedFilter v-if="!loading" :valuesInput="filterValues" v-model="filter" />
        <Loading v-if="loading" :displayed="loading" :fixed="false" />
        <Grid v-if="!loading && itemsFiltered.length > 0" :config="mediaGridConfig()" :items="itemsFiltered"/>
        <div v-if="!loading && itemsFiltered.length === 0" class="callout warning">
            <b>Aucun résultat, veuillez renseigner une valeur valide dans le champ de recherche</b>
        </div>
    </div>
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
                filterValues: ['animes','movie','tv']
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

        sortItems(){
            this.itemsInput.sort((a:Media, b:Media) => {
                return a.updated < b.updated;
            });
        }

        mediaGridConfig() {
            return new GridConfig({
                component: Card,
                onclick: (item: Media) => {
                    this.$router.push({name: 'media-view-items', params: {'id': item.id}});
                    return false;
                }
            });
        }

        @Watch('filter')
        onFilterChange() {
            this.loading = true;
            let filterSet:Boolean = (this.filter !== null && this.filter.trim() !== "");

            this.itemsFiltered = this.itemsInput.filter(item => {
                let filterResult = true;
                if(filterSet){
                    filterResult = item.category === this.filter;
                }

                return filterResult;
            });
            this.loading = false;
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../../libs/theming/mixins";
    @import "../../../scss/common/config";

    .search-form {
        position: relative;

        &::before {
            font-family: $fontawesomeFamily;
            content: '\f002';
            font-weight: $fontawesomeSolidWeight;
            display: block;
            position: absolute;
            top: 0.4rem;
            left: 0.9rem;
            z-index: 1;
            font-size: 1.75rem;
            color: #8a8a8a;
        }

        input[name="search"] {
            padding-left: 3rem;
            font-size: 1.3rem;
            height: 3.5rem;
            font-weight: 300;
            border: 1px solid #e0e0e0;
            background: rgb(254, 254, 254) none repeat scroll 0 0;
        }
    }

    .grid-container{
        max-width : 100%;
    }
</style>