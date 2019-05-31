<template>
    <div class="grid-container">
        <form v-on:submit.prevent="onSubmitMethod">
            <div class="search-form">
                <input type="text" placeholder="Rechercher ..." spellcheck="false" name="search" v-model="search" />
            </div>
        </form>
        <TabbedFilter v-if="!loading" :valuesInput="filterValues" :initialFilter="filter" :displayedField="'title'" v-model="filter" />
        <Loading v-if="loading" :displayed="loading" :fixed="false" />
        <FlexTable v-if="!loading && itemsDisplayed.length > 0" :itemsInput="itemsDisplayed" :configInput="tableConfig" />
        <div v-if="!loading && itemsDisplayed.length === 0" class="callout warning">
            <b>Aucun résultat, veuillez renseigner une valeur valide dans le champ de recherche</b>
        </div>
        <Pagination :itemsInput="itemsFiltered" :nbPerPage="9" v-model="itemsDisplayed"/>
    </div>
</template>

<script lang="ts">
    import {Component, Vue, Watch} from "vue-property-decorator";
    import FlexTable from "../../components/Table/FlexTable.vue";
    import Loading from "../../components/Block/Loading.vue";

    import tableConfig from "../../config/table/search";
    import ItemAPI from "../../app/API/ItemAPI";
    import Item from "../../app/Entity/Item";
    import TabbedFilter from "../../components/Block/TabbedFilter.vue";
    import Source from "../../app/Entity/Source";
    import SourceAPI from "../../app/API/SourceAPI";

    import Session from "../../components/Session";
    import Pagination from "../../components/Pagination.vue";

    @Component({
        components: {Pagination, TabbedFilter, Loading, FlexTable}
    })
    export default class Search extends Vue {
        search = "";
        loading = false;
        itemsInput: Array<Item> = [];
        itemsFiltered: Array<Item> = [];
        filter: Source;
        filterValues: Array<Source>;

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

        mounted() {
            SourceAPI.getAll((items:Array<Source>) => {
                this.filterValues = items;
                this.loading = false;
                this.refreshSession();
                if (this.search !== '') {
                    this.onSubmitMethod();
                }
            });
        }

        private refreshSession() {
            let sessionSearch = Session.get('item-search-value');
            if (sessionSearch) {
                this.$set(this, 'search', sessionSearch);
            }

            let sessionFilter = <Source>Session.getObject('item-search-filter');
            if(sessionFilter != null){
                let filter = null;
                this.filterValues.forEach((item) => {
                    if(item.id === sessionFilter.id){
                        filter = item;
                    }
                });
                this.$set(this, 'filter', filter);
            }
        }

        onSubmitMethod() {
            Session.set('item-search-value', this.search.trim());

            if (Session.get('item-search-value') === "") {
                return false;
            }

            this.loading = true;
            ItemAPI.search(Session.get('item-search-value'), (items) => {
                this.itemsInput = items;
                this.onFilterChange();
                this.loading = false;
            });
            return false;
        }

        @Watch('filter')
        onFilterChange() {
            Session.setObject('item-search-filter', this.filter);

            let filter: Source = Session.getObject('item-search-filter');

            this.loading = true;
            this.itemsFiltered = this.itemsInput.filter(item => {
                if (filter === null) {
                    return true;
                }
                return item.source.id === this.filter.id;
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

    .tab-container {
        background: $dark;
    }
</style>
