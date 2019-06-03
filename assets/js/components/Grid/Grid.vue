<template>
    <div class="grid grid-x">
        <div v-for="item in itemsDisplayed" class="cell" v-bind:class="classes">
            <template v-if="config.onclick">
                <a v-on:click="config.onclick(item)">
                    <component :is="config.component" :item="item"></component>
                </a>
            </template>
        </div>
        <div class="cell medium-12">
            <Pagination :itemsInput="items" :nbPerPage="itemsPerPage" v-model="itemsDisplayed" />
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";
    import Pagination from "../Pagination.vue";
    import GridConfig from "./GridConfig";

    @Component({
        components: {Pagination}
    })
    export default class Grid extends Vue {
        @Prop({type: Array}) items;
        @Prop({type: GridConfig}) config:GridConfig;

        itemsDisplayed: Array<any>;
        itemsPerPage: Number;
        itemsPerRow: Number;
        rowsPerPage: Number;

        classes:Array<String> = [];

        data() {
            return {
                itemsDisplayed: [],
                itemsPerPage: 24,
                itemsPerRow: 8,
                rowsPerPage: 3,
                classes : [],
            }
        }

        mounted() {
            this.calculWidth();

            if (!this.config.pagination) {
                this.itemsDisplayed = this.items;
            }

            window.onresize = () => {
                this.calculWidth();
            }
        }

        calculWidth() {
            let windowWidth = window.innerWidth;

            this.classes = [];

            let itemsPerRowSmall = 2;
            let itemsPerRowMedium = 3;
            let itemsPerRowLarge = 12;

            if(this.config.itemsPerRowForced !== undefined){
                this.itemsPerRow = this.config.itemsPerRowForced;
                this.classes.push('small-6');
                this.classes.push('medium-' + (12/this.itemsPerRow));
                this.classes.push('large-' + (12/this.itemsPerRow));
            }else{
                // small
                if(windowWidth <= 375){
                    this.itemsPerRow = itemsPerRowSmall;
                }else if (windowWidth <= 768){
                    this.itemsPerRow = itemsPerRowMedium;
                }else{
                    this.itemsPerRow = itemsPerRowLarge;
                }
                this.classes.push('small-' + (12/itemsPerRowSmall));
                this.classes.push('medium-' + (12/itemsPerRowMedium));
                this.classes.push('large-' + (12/itemsPerRowLarge));
            }

            if(this.config.nbRowsForced !== undefined){
                this.rowsPerPage = this.config.nbRowsForced;
            }else{
                if(windowWidth <= 375){
                    this.rowsPerPage = 4;
                }else if (windowWidth <= 768){
                    this.rowsPerPage = 4;
                }else{
                    this.rowsPerPage = 2;
                }
            }

            this.itemsPerPage = this.itemsPerRow * this.rowsPerPage;
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../../libs/theming/mixins";
    @import "../../../scss/common/config";

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
