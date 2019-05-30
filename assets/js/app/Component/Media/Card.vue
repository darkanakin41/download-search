<template>
    <div class="card visual">
        <div>
            <div class="banner">
                <img :src="item.backdrop" :alt="item.title" :title="item.title">
            </div>
            <div class="content">
                <h1>{{item.title}}</h1>
                <span><i class="fa fa-tag"></i> {{ item.category }}</span>
            </div>
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
        @include make-card();
        border: none;

        &.visual {
            width: 100%;
            padding-bottom: 45%;
            position: relative;
            margin: 0;

            & > div {
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
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
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                background: transparentize(black, .3);
                color: white;
                padding: .5rem 1rem;
                text-align: center;
                font-weight: $weightExtraBold;

                h1 {
                    font-size: 1.1rem;
                    padding: 0 0 5px;
                    margin: 0;
                    color: inherit;
                }

                h2 {
                    font-size: .8rem;
                    padding: 0;
                    margin: 0;
                    color: inherit;
                }

                span {
                    font-weight: $weightMedium;
                    color: inherit;
                    display: inline-block;
                    font-size: .8rem;
                    @include opacity(.8);

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
