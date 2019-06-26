<template>
    <header class="media">
        <v-img class="backdrop" v-if="media.backdrop !== null" :src="media.backdrop" :alt="media.title" :title="media.title" />
        <v-container fluid class="content">
            <div class="avatar">
                <v-img v-if="media.poster !== null" :src="media.poster" :alt="media.title" :title="media.title" aspect-ratio="0.66" />
            </div>
            <div class="infos">
                <h1>{{ media.title }}</h1>
                <div class="detail">
                    <i class="far fa-folder"></i> {{ media.category }}
                    <i class="fas fa-thermometer-three-quarters"></i> {{ media.status }}
                    <template v-if="media.releaseDate"><i class="fa fa-calendar"></i> {{ formatDate(media.releaseDate)}}
                    </template>
                    <i class="fa fa-star"></i> {{ media.averageNote }}
                </div>
                <div class="detail" v-if="media.genres.length > 0">
                    <i class="fa fa-tag"></i> Genre :
                    <template v-for="(genre, k, i) in media.genres">{{genre.title}}<template v-if="k < media.genres.length-1">, </template></template>
                </div>
                <div class="description"><i class="fa fa-book-open"></i> Résumé : <br /> {{ media.description }}</div>
            </div>
            <div v-if="allowSubscription()" class="actions">
                <i class="fa fa-spinner fa-spin" v-if="subscriptionLoading"></i>
                <a title="Suivre" v-if="!subscription && !subscriptionLoading" v-on:click="addSubscription()">
                    <i class="far fa-bell"></i>
                </a>
                <a title="Ne plus suivre" v-if="subscription && !subscriptionLoading" v-on:click="removeSubscription()">
                    <i class="far fa-bell-slash"></i>
                </a>
            </div>
        </v-container>
    </header>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";
    import {Getter, State} from 'vuex-class';
    import Media from "../../Entity/Media";
    import MediaSubscription from "../../Entity/MediaSubscription";
    import MediaSubscriptionAPI from "../../API/MediaSubscriptionAPI";
    import {SecurityState} from "../../Store/Security/types";

    const namespace: string = 'security';

    @Component
    export default class Header extends Vue {
        @Prop({type: Media}) media;

        @State('security') securityState: SecurityState;
        @Getter('isAuthenticated', {namespace}) isAuthenticated: Boolean;

        subscription: MediaSubscription | undefined;
        subscriptionLoading: Boolean;

        data() {
            return {
                subscription: undefined,
                subscriptionLoading: false,
            }
        }

        mounted() {
            if (this.isAuthenticated !== null) {
                this.subscriptionLoading = true;
                MediaSubscriptionAPI.getForMedia(this.media.id, (subscription: MediaSubscription | undefined) => {
                    this.subscription = subscription;
                    this.subscriptionLoading = false;
                });
            }
        }

        addSubscription() {
            this.subscriptionLoading = true;
            MediaSubscriptionAPI.add(this.media.id, (subscription: MediaSubscription) => {
                this.subscription = subscription;
                this.subscriptionLoading = false;
            });
            return false;
        }

        removeSubscription() {
            this.subscriptionLoading = true;
            MediaSubscriptionAPI.remove(this.media.id, (subscription: undefined) => {
                this.subscription = subscription;
                this.subscriptionLoading = false;
            });
            return false;
        }

        allowSubscription() {
            return this.isAuthenticated && ['tv', 'animes'].indexOf(this.media.category) !== -1;
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../../../libs/theming/mixins";
    @import "../../../../scss/common/config";

    header {
        position: relative;
        background: transparentize($subColor, .1);
        font-size: 1.1rem;

        .backdrop {
            content: '';
            z-index: 0;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-position: center center;
        }

        .content {
            color: white;
            display: flex;
            align-items: center;

            z-index: 1;

            background: transparentize($subColor, .2);
            position: relative;

            $avatar-width: 170px;

            .avatar {
                flex: 0 0 $avatar-width;
                overflow: hidden;
                margin: 0 25px;
                @include border-radius(15px);
                border: 2px solid $mainColor;

                img {
                    width: 100%;
                }
            }

            .infos {
                flex: 1;
                padding: 0 25px;

                h1 {
                    font-size: 1.6rem;
                    font-weight: bold;
                }

                .detail, .description {
                    opacity: .7;

                    .fa, .far, .fas, .fab {
                        width: 30px;
                        text-align: center;
                    }
                }
            }

            .actions {
                font-size: 2rem;

                a {
                    color: white;
                    @include opacity(.7);
                    @include transition(opacity .35s linear);

                    &:hover {
                        @include opacity(1);
                        @include transition(opacity .15s linear);
                    }
                }
            }
        }
    }

    @media (max-width: $breakpointSmall) {
        header {
            .content {
                .avatar {
                    display: none;
                }
            }
        }
    }
</style>
