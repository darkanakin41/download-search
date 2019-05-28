<template>
    <div class="top-bar">
        <div class="top-bar-left">
            <ul class="menu">
                <li>
                    <a data-toggle="drawer">
                        <i class="fa fa-bars"></i>
                    </a>
                </li>
                <li class="menu-text" id="page-name" v-if="pagename !== null">{{pagename}}</li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";

    @Component({
        components: {}
    })
    export default class TopBar extends Vue {
        @Prop({type: String}) pagename;

        notifications = [];

        data() {
            return {
                notifications: [],
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../../scss/common/config";
    @import "../../../libs/theming/mixins";

    .top-bar {
        background: $mainColor;
        color: white;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 2;

        .top-bar-left,
        .top-bar-right {
            & > .menu {
                background: transparent;

                & > li {
                    & > a {
                        color: inherit;
                    }
                }
            }
        }
    }
</style>
