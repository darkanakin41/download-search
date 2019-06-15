<template>
    <v-toolbar class="tab-menu" v-bind:class="{centered: isCentered}">
        <v-toolbar-items>
            <template v-for="item in items">
                <v-btn flat :to="{name: item.name}" active-class="active" exact>
                    <i v-if="item.icon !== undefined" :class="getIconClasses(item.icon)"></i>
                    {{ item.meta.title !== undefined ? item.meta.title : item.name }}
                </v-btn>
            </template>
        </v-toolbar-items>
    </v-toolbar>
</template>


<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";

    @Component
    export default class TabbedMenu extends Vue {
        @Prop({type: Array}) items;
        @Prop({type: Boolean, default: false}) isCentered;
    }
</script>

<style lang="scss" scoped>
    @import "../../../libs/theming/mixins";
    @import "../../../scss/common/config";

    .tab-menu {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        &.centered{
            justify-content: center;
        }


        .v-toolbar__items{
            .v-btn{
                &.active{
                    background: $mainColor;
                    font-weight : bold;
                }
            }
        }
    }
</style>
