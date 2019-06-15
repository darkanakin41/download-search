<template>
    <v-layout>
        <v-card hover :title="item.title" light>
            <v-img v-if="item.poster.trim() !== 'https://image.tmdb.org/t/p/original/'" :src="item.poster" :alt="'Saison ' + item.title" :title="'Saison ' + item.title" aspect-ratio="0.66" />
            <v-card-title primary-title>
                <div>
                    <h3 class="headline mb-0">Saison {{item.number}}</h3>
                    <div class="category"><i class="fa fa-tag"></i> {{ item.category }}</div>
                </div>
            </v-card-title>
        </v-card>
    </v-layout>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";
    import MediaSeason from "../../Entity/MediaSeason";

    @Component({
        components: {}
    })
    export default class Card extends Vue {
        @Prop({type: MediaSeason}) item;
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
                overflow: hidden;
                text-overflow: ellipsis;
                color: inherit;
                white-space: nowrap;
            }
        }
    }
</style>
