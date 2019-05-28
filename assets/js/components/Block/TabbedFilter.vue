<template>
    <div class="tab-container">
        <ul class="menu">
            <li v-for="filter in filters" v-bind:class="{active: filter.active}">
                <a href="#" @click="updateFilter($event, filter)">{{displayFilter(filter)}}</a>
            </li>
        </ul>
    </div>
</template>


<script lang="ts">
    import {Component, Prop, Vue, Watch} from "vue-property-decorator";

    @Component
    export default class TabbedFilter extends Vue {
        @Prop({type: Array}) valuesInput;
        @Prop({type: String}) filter;
        @Prop({type: String}) displayedField;

        filters;

        data() {
            return {
                filters: [],
            }
        }

        displayFilter(filter){
            if(this.displayedField !== undefined && filter.value[this.displayedField] !== undefined){
                return filter.value[this.displayedField];
            }
            return filter.value;
        }

        updateFilter(event, item) {
            event.preventDefault();
            this.filters.forEach(item => {
                item.active = false;
            });
            item.active = true;
            if (item.value === "tous") {
                this.$emit('input', null)
            } else {
                this.$emit('input', item.value)
            }
        }

        mounted(){
            this.onValuesInputChange();
        }

        @Watch("valuesInput")
        onValuesInputChange() {
            this.filters = [] as Object[];
            this.filters.push({
                value: "tous",
                active: true,
            });
            this.valuesInput.forEach(value => {
                this.filters.push({
                    value: value,
                    active: false,
                });
            });
        }

    }
</script>

<style lang="scss" scoped>
    @import "../../../libs/theming/mixins";
    @import "../../../scss/common/config";

    .tab-container {
        display: flex;
        flex-direction: row-reverse;

        .menu {
            li {
                a {
                    border-bottom: 3px solid transparent;
                    display: block;
                    padding: 1rem 1.8rem;
                    color: $mainColor;
                    font-family: 'Roboto Condensed', sans-serif;
                    text-transform: uppercase;
                    font-weight: bold;
                    @include opacity(.7);
                    @include transition(all .35s linear);

                    &:hover {
                        @include opacity(1);
                        @include transition(all .15s linear);
                    }
                }

                &.active {
                    background: transparent;
                    a {
                        @include opacity(1);
                        background: transparent;
                        color: $mainColor;
                        border-color: $mainColor;
                    }
                }
            }
        }
    }
</style>
