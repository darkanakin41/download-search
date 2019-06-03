<template>
    <div class="tab-menu" v-bind:class="{centered: isCentered}">
        <ul class="menu">
            <li v-for="item in items">
                <router-link :to="{name: item.name}" exact>
                    <i v-if="item.icon !== undefined" :class="getIconClasses(item.icon)"></i>
                    {{ item.meta.title !== undefined ? item.meta.title : item.name }}
                </router-link>
            </li>
        </ul>
    </div>
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

        .menu {
            li {
                a {
                    display: block;
                    padding: 1rem 1.8rem;
                    text-transform: uppercase;
                    font-weight: bold;
                    @include opacity(.7);
                    @include transition(all .35s linear);

                    &:hover {
                        @include opacity(1);
                        @include transition(all .15s linear);
                    }
                    &.active {
                        @include opacity(1);
                        background: transparent;
                    }
                }
            }
        }
    }
</style>
