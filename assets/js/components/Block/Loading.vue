<template>
    <div id="loading" v-bind:class="classes" v-if="displayed">
        <div class="spinner">
            <i class="fa fa-spin fa-spinner"></i>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue, Watch} from "vue-property-decorator";

    @Component
    export default class Loading extends Vue {
        @Prop({type: Boolean, default: true}) displayed;
        @Prop({type: Boolean, default: true}) fixed;
        @Prop({type: String, default: ''}) position;

        classes: Array<String> = [];

        data() {
            return {
                classes: [],
            }
        }

        mounted() {
            if (this.position == '') {
                this.classes.push('fixed');
            } else {
                this.classes.push(this.position);
            }
        }

        @Watch('displayed')
        onDisplayedUpdated() {
            let index = this.classes.indexOf('active');
            if (this.displayed) {
                if (index === -1) {
                    this.classes.push('active');
                }
            } else {
                if (index !== -1) {
                    delete this.classes[index];
                }
            }
        }
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
            position: fixed;
        }

        &.absolute {
            position: absolute;
        }

        &.active {
            visibility: visible;
            @include opacity(1);
            @include transition(all 1s linear)
        }
    }
</style>
