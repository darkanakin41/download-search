<template>
    <header class="media">
        <div class="backdrop"></div>
        <div class="content">
            <div class="avatar">
                <img :src="media.poster" :alt="media.title" />
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
                    <template v-for="(genre, k, i) in media.genres">{{genre.title}}
                        <template v-if="k < media.genres.length-1">,</template>
                    </template>
                </div>
                <div class="description"><i class="fa fa-book-open"></i> Résumé : <br /> {{ media.description }}</div>
            </div>
            <div v-if="allowSubscription()" class="actions">
                <a title="Suivre" v-if="!subscription" v-on:click="addSubscription()">
                    <i class="far fa-bell"></i>
                </a>
                <a title="Ne plus suivre" v-if="subscription" v-on:click="removeSubscription()">
                    <i class="far fa-bell-slash"></i>
                </a>
            </div>
        </div>
    </header>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";
    import Media from "../../Entity/Media";
    import Session from "../../../components/Session";
    import User from "../../Entity/User";
    import MediaSubscription from "../../Entity/MediaSubscription";
    import MediaSubscriptionAPI from "../../API/MediaSubscriptionAPI";

    @Component
    export default class Header extends Vue {
        @Prop({type: Media}) media;

        user: User | null;
        subscription: MediaSubscription | undefined;

        data() {
            return {
                user: undefined,
                subscription: undefined,
            }
        }

        mounted() {
            document.querySelector("header.media div.backdrop").style.backgroundImage = "url('" + this.media.backdrop + "')";
            this.user = Session.getObject('user');

            if (this.user !== null) {
                MediaSubscriptionAPI.getForMedia(this.media.id, (subscription: MediaSubscription | undefined) => {
                    this.subscription = subscription;
                });
            }
        }

        addSubscription() {
            MediaSubscriptionAPI.add(this.media.id, (subscription: MediaSubscription) => {
                this.subscription = subscription;
            });
            return false;
        }

        removeSubscription() {
            MediaSubscriptionAPI.remove(this.media.id, (subscription: undefined) => {
                this.subscription = subscription;
            });
            return false;
        }

        allowSubscription() {
            return this.user !== undefined && ['tv', 'animes'].indexOf(this.media.category) !== -1;
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../../../libs/theming/mixins";
    @import "../../../../scss/common/config";

    header {
        position: relative;
        background: transparentize($subColor, .1);
        padding: 50px 0;

        .backdrop {
            content: '';
            z-index: -1;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: url('http://matchs.p-lejeune.com/media/jeu/2-counter-strike-global-offensive/banner-1477230434.jpg');
            background-position: center center;
        }

        .content {
            margin: 0 auto;
            color: white;
            width: 100%;
            max-width: 1280px;
            display: flex;
            align-items: center;

            $avatar-width: 200px;

            .avatar {
                flex: 0 0 $avatar-width;
                overflow: hidden;
                padding: 0 25px;
                white-space: nowrap;

                img {
                    @include border-radius(15px);
                    border: 2px solid $mainColor;
                }
            }

            .infos {
                flex: 1;
                padding: 0 25px;

                h1 {
                    font-size: 1.4rem;
                    font-weight: bold;
                }

                .detail, .description {
                    font-size: 1rem;
                    opacity: .7;

                    .fa, .far, .fas, .fab {
                        width: 30px;
                        text-align: center;
                    }
                }
            }

            .actions {
                a {
                    font-size: 2rem;
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
