<template>
    <div>
        <div class="callout success">
            <div class="grid-container">
                <h1 class="title">Bienvenue sur Download Search</h1>
                <p>Cette application vous permet de rechercher des liens de téléchargements parmi les suites suivants :</p>
                <ul>
                    <li v-for="source in sources">
                        <a :href="source.baseUrl">{{source.title}}</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="text-center">
            <router-link :to="{name: 'search'}" exact class="button custom big">
                <i class="fa fa-search"></i> Accéder à la recherche
            </router-link>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import Source from "../app/Entity/Source";
    import SourceAPI from "../app/API/SourceAPI";

    @Component({
        components: {}
    })
    export default class HomePage extends Vue {
        sources: Array<Source>;

        data() {
            return {
                sources: [],
            };
        }

        mounted() {
            SourceAPI.getAll((response) => {
                this.sources = SourceAPI.convert(response.data);
            })
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

    .tab-container {
        background: $dark;
    }
</style>
