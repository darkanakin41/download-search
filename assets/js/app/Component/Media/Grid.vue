<template>
    <div class="grid grid-x grid-padding-x grid-padding-y">
        <div v-for="item in itemsDisplayed" class="cell large-4 medium-6">
            <router-link :to="{name: 'media-view', params:{id: item.id}}">
                <Card :item="item" />
            </router-link>
        </div>
        <div class="cell medium-12">
            <Pagination :itemsInput="items" :nbPerPage="9" v-model="itemsDisplayed"/>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";
    import Card from "./Card.vue";
    import Pagination from "../../../components/Pagination.vue";
    import Media from "../../Entity/Media";

    @Component({
        components: {Pagination, Card}
    })
    export default class Grid extends Vue {
        @Prop({type: Array}) items;
        @Prop({type: Boolean, default: true}) pagination;

        itemsDisplayed:Array<Media> = [];

        data(){
            return{
                itemsDisplayed: [],
            }
        }

        mounted(){
            if(!this.pagination){
                this.itemsDisplayed = this.items;
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../../../libs/theming/mixins";
    @import "../../../../scss/common/config";

    .item {
        @include make-card(white, 0, 0);

        .title {
            background: $subColor;
            color: white;
            font-size: 1.2rem;
            margin: 0;
            padding: .5rem 1rem;

            .pull-right {
                float: right;
            }

            .small {
                opacity: 0.4;
            }
        }
    }
</style>
