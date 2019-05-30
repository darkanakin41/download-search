<template>
    <div class="item">
        <h2 v-if="title" class="title">
            #{{item.id}} - {{ item.title }}
            <span class="pull-right small">{{ item.source.title }}</span>
        </h2>
        <div class="grid grid-x grid-padding-x grid-padding-y item-informations">
            <div class="cell large-3 medium-6">
                <label>Lien d'origine</label>
                <span class="value">
                    <a :href="item.fullUrl" target="_blank">{{ item.source.title }}</a>
                </span>
            </div>
            <div class="cell large-3 medium-6">
                <label>Genres</label>
                <span class="value">{{ item.genres.join(', ')}}</span>
            </div>
            <div class="cell large-3 medium-6">
                <label>Qualité</label>
                <span class="value">{{ item.quality }}</span>
            </div>
            <div class="cell large-3 medium-6">
                <label>Language</label>
                <span class="value">{{ item.language }}</span>
            </div>
            <div class="cell large-3 medium-6">
                <label>Catégorie</label>
                <span class="value">{{ item.category }}</span>
            </div>
            <template v-if="item.category === 'tv' || item.category === 'animes'">
                <div class="cell large-3 medium-6">
                    <label>Saison</label>
                    <span class="value">{{ item.season}}</span>
                </div>
                <div class="cell large-3 medium-6">
                    <label>Dernier Episode</label>
                    <span class="value">{{ item.lastPart}}</span>
                </div>
            </template>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";
    import Item from "../../Entity/Item";

    @Component({
        components: {}
    })
    export default class Card extends Vue {
        @Prop({type: Item}) item;
        @Prop({type: Boolean, default: true}) title;
    }
</script>

<style lang="scss" scoped>
    @import "../../../../libs/theming/mixins";
    @import "../../../../scss/common/config";

    .item {
        @include make-card(white, 0, 0);

        .title {
            background: $subColor;
            color: white;
            font-size: 1.2rem;
            margin: 0;
            padding: .5rem 1rem;

            .pull-right {
                float: right;
            }

            .small {
                opacity: 0.4;
            }
        }
    }
</style>
