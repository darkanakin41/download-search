<template>
    <v-toolbar-items>
        <template v-for="filter in filters">
            <v-btn v-bind:class="{active: filter.active}" flat @click="updateFilter($event, filter)">{{ displayFilter(filter) }}</v-btn>
        </template>
    </v-toolbar-items>
</template>


<script lang="ts">
    import {Component, Prop, Vue, Watch} from "vue-property-decorator";

    @Component
    export default class TabbedFilter extends Vue {
        @Prop({type: Array}) valuesInput;
        @Prop({default: null}) initialFilter;
        @Prop({type: String}) displayedField;

        filters;

        data() {
            return {
                filters: [],
            }
        }

        displayFilter(filter) {
            if (this.displayedField !== undefined && filter.value[this.displayedField] !== undefined) {
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

        mounted() {
            this.onValuesInputChange();
        }

        @Watch("valuesInput")
        onValuesInputChange() {
            this.filters = [] as Object[];
            this.filters.push({
                value: "tous",
                active: this.initialFilter === null,
            });
            this.valuesInput.forEach(value => {
                this.filters.push({
                    value: value,
                    active: this.initialFilter === value,
                });
            });
        }

    }
</script>

<style lang="scss" scoped>
    @import "../../../libs/theming/mixins";
    @import "../../../scss/common/config";

    .v-toolbar__items{
        .v-btn{
            &.active{
                background: $mainColor;
                font-weight : bold;
            }
        }
    }
</style>
