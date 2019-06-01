<template>
    <div class="my-grid">
        <div v-for="item in itemsDisplayed" class="cell" :style="{width:itemWidth + 'px'}">
            <router-link :to="{name: 'media-view', params:{id: item.id}}">
                <Card :item="item" />
            </router-link>
        </div>
        <div class="cell full-width">
            <Pagination :itemsInput="items" :nbPerPage="itemsPerPage" v-model="itemsDisplayed" />
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

        itemsDisplayed: Array<Media>;
        itemsPerPage: Number;
        itemsPerRow: Number;
        rowsPerPage: Number;
        itemWidth: Number;

        data() {
            return {
                itemsDisplayed: [],
                itemsPerPage: 24,
                itemsPerRow: 8,
                rowsPerPage: 3,
                itemWidth: '',
            }
        }

        mounted() {
            this.calculWidth();

            if (!this.pagination) {
                this.itemsDisplayed = this.items;
            }

            window.onresize = () => {
                this.calculWidth();
            }
        }

        calculWidth() {
            let windowWidth = window.innerWidth;

            if(windowWidth <= 375){
                this.itemsPerRow = 2;
                this.rowsPerPage = 4;
            }else if (windowWidth <= 768){
                this.itemsPerRow = 3;
                this.rowsPerPage = 4;
            }else if(windowWidth < 1920){
                this.itemsPerRow = 6;
                this.rowsPerPage = 2;
            }else{
                this.itemsPerRow = 12;
                this.rowsPerPage = 2;
            }

            this.itemsPerPage = this.itemsPerRow * this.rowsPerPage;

            let style = this.$el.currentStyle || window.getComputedStyle(this.$el);
            let width = this.$el.offsetWidth;
            let border = parseFloat(style.borderLeftWidth) + parseFloat(style.borderRightWidth);
            let padding = parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);

            let totalWidth = width - border - padding;

            this.itemWidth = (totalWidth / this.itemsPerRow) - 15;
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../../../libs/theming/mixins";
    @import "../../../../scss/common/config";

    .my-grid {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        padding: .5rem 0;

        & > .cell {
            width: 150px;
            margin: 6px;
            &.full-width{
                margin : 0;
                width : 100%;
            }
        }
    }
</style>
