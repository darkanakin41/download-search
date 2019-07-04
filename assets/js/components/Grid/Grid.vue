<template>
    <v-item-group>
        <v-layout wrap>
            <template v-for="item in itemsDisplayed">
                <v-flex v-bind:class="classes">
                    <template v-if="getAttributes(item,'to') !== undefined">
                        <router-link :to="getAttributes(item,'to')">
                            <v-item class="d-flex align-center" >
                                <component :is="config.component" :item="item"></component>
                            </v-item>
                        </router-link>
                    </template>
                    <template v-else-if="getAttributes(item,'onclick') !== undefined">
                        <a v-on:click="getAttributes(item,'onclick')(item)">
                            <v-item class="d-flex align-center" >
                                <component :is="config.component" :item="item"></component>
                            </v-item>
                        </a>
                    </template>
                    <template v-else>
                        <v-item class="d-flex align-center" >
                            <component :is="config.component" :item="item"></component>
                        </v-item>
                    </template>
                </v-flex>
            </template>
        </v-layout>
        <Pagination :itemsInput="items" :nbPerPage="itemsPerPage" v-model="itemsDisplayed" />
    </v-item-group>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";
    import Pagination from "../Pagination.vue";
    import GridConfig from "./GridConfig";
    import Callback from "../../app/Types/callback";

    @Component({
        components: {Pagination}
    })
    export default class Grid extends Vue {
        @Prop({type: Array}) items;
        @Prop({type: GridConfig}) config: GridConfig;

        itemsDisplayed: Array<any>;
        itemsPerPage: Number;
        itemsPerRow: Number;
        rowsPerPage: Number;

        classes: Array<String> = [];

        data() {
            return {
                itemsDisplayed: [],
                itemsPerPage: 24,
                itemsPerRow: 8,
                rowsPerPage: 3,
                classes: [],
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

            if (this.config.itemsPerRowForced !== undefined) {
                this.itemsPerRow = this.config.itemsPerRowForced;
                this.classes.push('xs6');
                this.classes.push('md' + (12 / this.itemsPerRow));
                this.classes.push('lg' + (12 / this.itemsPerRow));
            } else {
                // small
                if (windowWidth <= 375) {
                    this.itemsPerRow = itemsPerRowSmall;
                } else if (windowWidth <= 768) {
                    this.itemsPerRow = itemsPerRowMedium;
                } else {
                    this.itemsPerRow = itemsPerRowLarge;
                }
                this.classes.push('xs' + (12 / itemsPerRowSmall));
                this.classes.push('md' + (12 / itemsPerRowMedium));
                this.classes.push('lg' + (12 / itemsPerRowLarge));
            }

            if (this.config.nbRowsForced !== undefined) {
                this.rowsPerPage = this.config.nbRowsForced;
            } else {
                if (windowWidth <= 375) {
                    this.rowsPerPage = 4;
                } else if (windowWidth <= 768) {
                    this.rowsPerPage = 4;
                } else {
                    this.rowsPerPage = 2;
                }
            }

            this.itemsPerPage = this.itemsPerRow * this.rowsPerPage;
        }

        getAttributes(item, name) {
            if(this.config[name] !== undefined){
                let value = this.config[name];
                if(value instanceof Callback){
                    return value.callable;
                }
                if(value instanceof Function){
                    return value(item);
                }
                return value
            }
            return undefined;
        }
    }
</script>

<style lang="scss" scoped>
    .v-item-group {
        & > .layout, & > .flex {
            cursor: auto;
        }
    }
</style>
