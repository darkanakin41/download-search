<template>
    <div class="grid-container">
        <form v-on:submit.prevent="onSubmitMethod">
            <div class="search-form">
                <input type="text" placeholder="Rechercher ..." spellcheck="false" name="search" v-model="search" />
            </div>
        </form>
        <TabbedFilter v-if="!loading" :valuesInput="filterValues" :displayedField="'title'" v-model="filter"/>
        <Loading v-if="loading" :displayed="loading" :fixed="false" />
        <FlexTable v-if="!loading && itemsDisplayed.length > 0" :itemsInput="itemsDisplayed" :configInput="tableConfig" />
        <div v-if="!loading && itemsDisplayed.length === 0" class="callout warning">
            <b>Aucun résultat, veuillez renseigner une valeur valide dans le champ de recherche</b>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue, Watch} from "vue-property-decorator";
    import FlexTable from "../components/Table/FlexTable.vue";
    import Loading from "../components/Block/Loading.vue";

    import tableConfig from "../config/table/search";
    import ItemAPI from "../app/API/ItemAPI";
    import Item from "../app/Entity/Item";
    import TabbedFilter from "../components/Block/TabbedFilter.vue";
    import Source from "../app/Entity/Source";
    import SourceAPI from "../app/API/SourceAPI";

    @Component({
        components: {TabbedFilter, Loading, FlexTable}
    })
    export default class HomePage extends Vue {
        search = "";
        loading = false;
        itemsInput: Array<Item> = [];
        itemsDisplayed: Array<Item> = [];
        tableConfig = tableConfig;
        filter: Source;
        filterValues:Array<Source>;

        data() {
            return {
                search: '',
                filter: null,
                loading: false,
                itemsInput: [],
                itemsDisplayed: [],
                filterValues: [],
                tableConfig: tableConfig,
            }
        }

        mounted(){
            SourceAPI.getAll((response) => {
                this.filterValues = SourceAPI.convert(response.data);
                this.loading = false;
            });
        }

        onSubmitMethod() {
            if (this.search.trim() === "") {
                return false;
            }

            this.loading = true;
            ItemAPI.search(this.search, (response) => {
                this.itemsInput = ItemAPI.convert(response.data);
                this.onFilterChange();
                this.loading = false;
            });
            return false;
        }

        @Watch('filter')
        onFilterChange() {
            console.log("onFilterChange");
            this.loading = true;
            this.itemsDisplayed = this.itemsInput.filter(item => {
                if (this.filter === null) {
                    return true;
                }
                return item.source.id === this.filter.id;
            });
            this.loading = false;
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../libs/theming/mixins";
    @import "../../scss/common/config";

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
    .tab-container{
        background:$dark;
    }
</style>
