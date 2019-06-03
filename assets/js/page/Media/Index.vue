<template>
    <div class="grid-container">
        <form v-on:submit.prevent="onSubmitMethod">
            <div class="search-form">
                <input type="text" placeholder="Rechercher ..." spellcheck="false" name="search" v-model="search" />
            </div>
        </form>
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

    import Session from "../../components/Session";
    import MediaAPI from "../../app/API/MediaAPI";
    import Media from "../../app/Entity/Media";
    import Card from "../../app/Component/Media/Card.vue";
    import GridConfig from "../../components/Grid/GridConfig";

    @Component({
        components: {Grid, Loading, FlexTable, TabbedFilter}
    })
    export default class Index extends Vue {
        mediaCardComponent:Function = Card;
        search = "";
        loading = false;
        filter = "";
        itemsInput: Array<Media> = [];
        itemsFiltered: Array<Media> = [];

        data() {
            return {
                search: '',
                loading: false,
                itemsInput: [],
                itemsDisplayed: [],
                tableConfig: tableConfig,
                filterValues: ['animes','movie','tv']
            }
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

        mounted() {
            this.loading = true;
            MediaAPI.getAll((items) => {
                this.itemsInput = items;
                this.refreshSession();
                this.onSubmitMethod();
                this.loading = false;
            });
        }

        private refreshSession() {
            let sessionSearch = Session.get('media-search-value');
            if (sessionSearch) {
                this.$set(this, 'search', sessionSearch);
            }
        }


        @Watch('filter')
        onFilterChange() {
            this.loading = true;
            let search = <string> Session.get('media-search-value');
            let searchSet:Boolean = (search !== null && search.trim() !== "");
            let filterSet:Boolean = (this.filter !== null && this.filter.trim() !== "");

            this.itemsFiltered = this.itemsInput.filter(item => {
                let filterResult = true;
                let searchResult = true;

                if(searchSet){
                    searchResult = item.title.toLowerCase().indexOf(search.toLowerCase()) !== -1;
                }
                if(filterSet){
                    filterResult = item.category === this.filter;
                }

                return searchResult && filterResult;
            });
            this.loading = false;
        }

        onSubmitMethod() {
            Session.set('media-search-value', this.search.trim());
            this.onFilterChange();
            return false;
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
