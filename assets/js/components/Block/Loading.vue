<template>
    <div id="loading" v-bind:class="getClasses()" v-if="displayed">
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
        @Prop({type: String, default: ''}) position;

        mounted(){
            if(this.position == '' && this.fixed){
                this.$set(this, 'position', 'fixed');
            }
        }

        getClasses(){
            let classes = [];
            classes.push(this.position);
            if(this.displayed){
                classes.push('active');
            }
            return classes;
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
            position : fixed;
        }
        &.absolute{
            position : absolute;
        }
        &.active {
            visibility: visible;
            @include opacity(1);
            @include transition(all 1s linear)
        }
    }
</style>
