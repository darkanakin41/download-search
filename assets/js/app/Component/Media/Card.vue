<template>
    <div class="card media visual">
        <div class="banner">
            <img :src="item.poster" :alt="item.title" :title="item.title">
        </div>
        <div class="content">
            <h1 class="title">{{item.title}}</h1>
            <span><i class="fa fa-tag"></i> {{ item.category }}</span>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";
    import Media from "../../Entity/Media";

    @Component({
        components: {}
    })
    export default class Card extends Vue {
        @Prop({type: Media}) item;
    }
</script>

<style lang="scss" scoped>
    @import "../../../../libs/theming/mixins";
    @import "../../../../scss/common/config";

    .card {
        &.visual {
            width: 100%;
            position: relative;
            margin: 0;
            background: white;

            border: 2px solid transparent;
            @include transition(border-color .35s linear);

            &:hover {
                border-color: $mainColor;
                @include transition(border-color .15s linear);
            }

            .banner {
                width: 100%;
                overflow: hidden;
                position: relative;

                img {
                    width: 100%;
                }
            }

            .content {
                color: $dark;
                padding: .5rem 1rem;
                text-align: left;
                font-weight: $weightExtraBold;

                .title, span {
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    color: inherit;
                }

                .title {
                    font-size: 1rem;
                    margin: 0;
                    padding: 0;
                }

                span {
                    font-weight: $weightMedium;
                    display: inline-block;
                    font-size: .8rem;
                    @include opacity(.6);

                    .fa, .fas {
                        width: 23px;
                        text-align: center;
                    }

                    &:not(:last-child) {
                        margin-right: 15px;
                    }
                }
            }
        }
    }
</style>
