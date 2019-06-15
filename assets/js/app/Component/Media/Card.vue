<template>
    <v-layout>
        <v-card hover :title="item.title" light>
            <v-img v-if="item.poster.trim() !== 'https://image.tmdb.org/t/p/original/'" :src="item.poster" :alt="item.title" :title="item.title" aspect-ratio="0.66" />
            <v-card-title primary-title>
                <div>
                    <h3 class="headline mb-0">{{item.title}}</h3>
                    <div class="category"><i class="fa fa-tag"></i> {{ item.category }}</div>
                </div>
            </v-card-title>
        </v-card>
    </v-layout>
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

    .v-card {
        margin : 5px;
        max-width: calc(100% - 10px);

        .v-card__title {
            padding: .5rem .3rem;

            & > div{
                max-width: 100%;
            }
            .headline {
                font-size: 1.2rem !important;
                line-height: 1.2 !important;
                margin: 0;
                padding: 0;
            }

            .category {
                font-weight: $weightMedium;
                display: inline-block;
                @include opacity(.6);

                .fa, .fas {
                    width: 23px;
                    text-align: center;
                }

                &:not(:last-child) {
                    margin-right: 15px;
                }
            }

            .headline, .category {
                overflow: hidden;
                text-overflow: ellipsis;
                color: inherit;
                white-space: nowrap;
            }
        }
    }
</style>
