<template>
    <div id="loading" :class="{active:displayed, fixed:fixed}" v-if="displayed">
        <div class="spinner">
            <i class="fa fa-spin fa-spinner"></i>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";

    @Component
    export default class Loading extends Vue {
        @Prop({type: Boolean, default: true}) displayed;
        @Prop({type: Boolean, default: true}) fixed;
    }
</script>

<style lang="scss" scoped>
    @import "../../../libs/theming/mixins";
    @import "../../../scss/common/config";

    #loading {
        display: flex;
        visibility: hidden;
        position: relative;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        z-index: 3;
        justify-content: center;
        align-items: center;
        color: white;
        font-size: 10rem;
        @include opacity(0);

        &.fixed {
            position : fixed;
        }
        &.active {
            visibility: visible;
            @include opacity(1);
            @include transition(all 1s linear)
        }
    }
</style>
