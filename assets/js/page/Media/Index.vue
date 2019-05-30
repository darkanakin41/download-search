<template>
    <div class="grid-container">
        <form v-on:submit.prevent="onSubmitMethod">
            <div class="search-form">
                <input type="text" placeholder="Rechercher ..." spellcheck="false" name="search" v-model="search" />
            </div>
        </form>
        <Loading v-if="loading" :displayed="loading" :fixed="false" />
        <Grid v-if="!loading && itemsDisplayed.length > 0" :items="itemsDisplayed"/>
        <div v-if="!loading && itemsDisplayed.length === 0" class="callout warning">
            <b>Aucun résultat, veuillez renseigner une valeur valide dans le champ de recherche</b>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import FlexTable from "../../components/Table/FlexTable.vue";
    import Loading from "../../components/Block/Loading.vue";

    import tableConfig from "../../config/table/search";
    import Item from "../../app/Entity/Item";

    import Session from "../../components/Session";
    import MediaAPI from "../../app/API/MediaAPI";
    import Grid from "../../app/Component/Media/Grid.vue";

    @Component({
        components: {Grid, Loading, FlexTable}
    })
    export default class Index extends Vue {
        search = "";
        loading = false;
        itemsInput: Array<Item> = [];
        itemsDisplayed: Array<Item> = [];

        data() {
            return {
                search: '',
                loading: false,
                itemsInput: [],
                itemsDisplayed: [],
                tableConfig: tableConfig,
            }
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

        onSubmitMethod() {
            let search = <string> Session.set('media-search-value', this.search.trim());

            this.loading = true;
            this.itemsDisplayed = this.itemsInput.filter((item) => {
                if(search === ""){
                    return true;
                }
                return item.title.toLowerCase().startsWith(search.toLowerCase());
            });
            this.loading = false;
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

    .tab-container {
        background: $dark;
    }
</style>
