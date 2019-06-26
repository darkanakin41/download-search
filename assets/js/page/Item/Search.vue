<template>
    <v-container fluid>
        <v-card>
            <v-toolbar>
                <form v-on:submit.prevent="onSubmitMethod">
                    <v-text-field prepend-icon="search" v-model="search">
                        Recherche
                    </v-text-field>
                </form>
                <v-spacer></v-spacer>
                <TabbedFilter v-if="!isLoading()" :valuesInput="sourcesState.sources" :initialFilter="filter" :displayedField="'title'" v-model="filter" />
            </v-toolbar>
            <v-sheet>
                <Loading :displayed="isLoading()" />
                <FlexTable v-if="!isLoading() && itemsDisplayed.length > 0" :itemsInput="itemsDisplayed" :configInput="tableConfig" />
                <div v-if="!loading && itemsFiltered.length === 0" class="callout warning text-center">
                    Aucun résultat
                </div>
                <Pagination :itemsInput="itemsFiltered" :nbPerPage="9" v-model="itemsDisplayed" />
            </v-sheet>
        </v-card>
    </v-container>
</template>

<script lang="ts">
    import {Component, Vue, Watch} from "vue-property-decorator";
    import {Action, Getter, State} from 'vuex-class';

    import FlexTable from "../../components/Table/FlexTable.vue";
    import Loading from "../../components/Block/Loading.vue";

    import tableConfig from "../../config/table/search";
    import ItemAPI from "../../app/API/ItemAPI";
    import Item from "../../app/Entity/Item";
    import TabbedFilter from "../../components/Block/TabbedFilter.vue";
    import Source from "../../app/Entity/Source";

    import Session from "../../components/Session";
    import Pagination from "../../components/Pagination.vue";
    import {SourceState} from "../../app/Store/Source/types";

    const namespace: string = 'source';

    @Component({
        components: {Pagination, TabbedFilter, Loading, FlexTable}
    })
    export default class Search extends Vue {
        @State('source') sourcesState: SourceState;
        @Action('getAll', {namespace}) refreshSources: any;
        @Getter('isLoading', {namespace}) isSourceLoading: Boolean;

        search = "";
        loading = false;
        itemsInput: Array<Item> = [];
        itemsFiltered: Array<Item> = [];
        filter: Source;

        data() {
            return {
                search: '',
                filter: null,
                loading: false,
                itemsInput: [],
                itemsDisplayed: [],
                tableConfig: tableConfig,
            }
        }

        mounted() {
            if (!this.sourcesState.loaded) {
                this.refreshSources();
            } else {
                this.refreshSession();
                if (this.search !== '') {
                    this.onSubmitMethod();
                }
            }
        }

        @Watch('isSourceLoading')
        onSourceLoadingEnded() {
            if (this.isSourceLoading) {
                return;
            }
            this.refreshSession();
            if (this.search !== '') {
                this.onSubmitMethod();
            }
        }

        isLoading() {
            return this.isSourceLoading || this.loading;
        }

        private refreshSession() {
            let sessionSearch = Session.get('item-search-value');
            if (sessionSearch) {
                this.$set(this, 'search', sessionSearch);
            }

            let sessionFilter = <Source>Session.getObject('item-search-filter');
            if (sessionFilter != null) {
                let filter = null;
                this.sourcesState.sources.forEach((item) => {
                    if (item.id === sessionFilter.id) {
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
</style>
