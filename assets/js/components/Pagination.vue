<template>
    <div v-if="lastPage > 0" class="grid grid-x grid padding-x grid-padding-y">
        <div class="cell medium-4">
            Il y a {{ this.itemsInput.length }} éléments
        </div>
        <div class="cell medium-8 text-right">
            <nav aria-label="Pagination">
                <ul class="pagination">
                    <li class="pagination-previous" v-if="currentPage > 1">
                        <a @click="currentPage--">
                            Previous <span class="show-for-sr">page</span>
                        </a>
                    </li>
                    <li v-if="displayPreviousElipsis()" class="ellipsis" aria-hidden="true"></li>
                    <li v-for="i in getPreviousPages()" v-if="i > 0">
                        <a @click="currentPage=i">{{i}}</a>
                    </li>
                    <li class="current">
                        <span class="show-for-sr">You're on page</span> {{currentPage}}
                    </li>
                    <li v-for="i in getNextPages()" v-if="i <= lastPage">
                        <a @click="currentPage=i">{{i}}</a>
                    </li>
                    <li v-if="displayNextElipsis()" class="ellipsis" aria-hidden="true"></li>
                    <li class="pagination-next">
                        <a @click="currentPage++" v-if="currentPage < lastPage">
                            Next <span class="show-for-sr">page</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue, Watch} from "vue-property-decorator";

    @Component
    export default class Pagination extends Vue {
        @Prop({type: Array}) itemsInput;
        @Prop({type: Number, default: 10}) nbPerPage;

        currentPage: Number = 1;
        lastPage: Number = null;

        private nextAndPreviousNumber: Number = 5;

        mounted() {
            this.currentPage = 1;
            this.onItemsInputUpdate();
            this.onCurrentPageUpdate();
        }

        getPreviousPages() {
            let pagesNumber = [];
            for (let i = 1; i <= this.nextAndPreviousNumber; i++) {
                let pageNumber = this.currentPage - i;
                if (pageNumber >= 1) {
                    pagesNumber.push(pageNumber)
                }
            }
            return pagesNumber.reverse();
        }

        getNextPages() {
            let pagesNumber = [];
            for (let i = 1; i <= this.nextAndPreviousNumber; i++) {
                let pageNumber = this.currentPage + i;
                if (pageNumber <= this.lastPage) {
                    pagesNumber.push(pageNumber)
                }
            }
            return pagesNumber;
        }

        displayPreviousElipsis() {
            let pages = this.getPreviousPages();
            if (pages.length === 0) {
                return false;
            }
            let lastPagesItem = pages[0];
            return lastPagesItem > 1;
        }

        displayNextElipsis() {
            let pages = this.getNextPages();
            if (pages.length === 0) {
                return false;
            }
            let lastPagesItem = pages[pages.length - 1];
            return lastPagesItem < this.lastPage;
        }

        /**
         * Calcul the maximum number of page to display
         */
        @Watch("itemsInput")
        onItemsInputUpdate() {
            if (this.itemsInput.length <= this.nbPerPage) {
                this.lastPage = 0;
            } else {
                this.lastPage = Math.trunc(this.itemsInput.length / this.nbPerPage);
                if ((this.itemsInput.length % this.nbPerPage) > 0) {
                    this.lastPage++;
                }
            }
            this.currentPage = 1;
            this.onCurrentPageUpdate();
        }

        /**
         * Calcul of item list to display
         */
        @Watch("currentPage")
        onCurrentPageUpdate() {
            let start = (this.currentPage - 1) * this.nbPerPage;
            let end = start + this.nbPerPage;
            this.$emit('input', this.itemsInput.slice(start, end));
        }

    }
</script>

<style lang="scss" scoped>
    @import "../../libs/theming/mixins";
    @import "../../scss/common/config";

    .pagination {
        background: transparent;
        list-style: none;
        position: relative;
        display: inline-flex;
        width: auto;
        margin: 0 auto;

        li {
            display: list-item;
            background: transparent;
            padding: 0;

            a {
                border: none;
                outline: none;
                padding: .1875rem .625rem;
                @include opacity(.7);
                &:hover{
                    color : white;
                    background : transparentize($subColor, .5);
                    @include opacity(1);
                    @include transition(background .15s linear);
                }
            }

            &:first-child {
                a {
                    padding-left: 15px;
                    @include border-radius(15px 0 0 15px);
                }
            }

            &:last-child {
                a {
                    padding-right: 15px;
                    @include border-radius(0 15px 15px 0);
                }
            }

            &.current {
                background: $mainColor;
                padding: .1875rem .625rem;
                color: white;
                font-weight: 700;
                @include box-shadow(0 5px 20px transparentize(black, .8));
            }
        }
    }


    @media screen and (max-width: $breakpointSmall) {
        .pagination {
            li {
                display: inline-block;
            }
        }
    }
</style>
