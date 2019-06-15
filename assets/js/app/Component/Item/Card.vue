<template>

    <v-card light>
        <v-toolbar>
            <v-toolbar-title>#{{item.id}} - {{ item.title }}</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-title class="hidden-sm-and-down faded">{{ item.source.title }}</v-toolbar-title>
        </v-toolbar>
        <v-sheet>
            <v-layout wrap>
                <div class="flex lg3 md6">
                    <label>Lien d'origine</label>
                    <span class="value">
                    <a :href="item.fullUrl" target="_blank">{{ item.source.title }}</a>
                </span>
                </div>
                <div class="flex lg3 md6">
                    <label>Genres</label>
                    <span class="value">{{ item.genres.join(', ')}}</span>
                </div>
                <div class="flex lg3 md6">
                    <label>Qualité</label>
                    <span class="value">{{ item.quality }}</span>
                </div>
                <div class="flex lg3 md6">
                    <label>Language</label>
                    <span class="value">{{ item.language }}</span>
                </div>
                <div class="flex lg3 md6">
                    <label>Catégorie</label>
                    <span class="value">{{ item.category }}</span>
                </div>
                <template v-if="item.category === 'tv' || item.category === 'animes'">
                    <div class="flex lg3 md6">
                        <label>Saison</label>
                        <span class="value">{{ item.season}}</span>
                    </div>
                    <div class="flex lg3 md6">
                        <label>Dernier Episode</label>
                        <span class="value">{{ item.lastPart}}</span>
                    </div>
                </template>
            </v-layout>
        </v-sheet>
    </v-card>
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

    .v-card {
        .v-toolbar {
            .faded {
                @include opacity(.7);
            }
        }

        .v-sheet {
            padding: .7rem 1rem;
        }
    }
</style>
