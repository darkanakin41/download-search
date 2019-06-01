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
                    <template v-if="media.releaseDate"><i class="fa fa-calendar"></i> {{ displayDate(media.releaseDate)}}</template>
                    <i class="fa fa-star"></i> {{ media.averageNote }}
                </div>
                <div class="detail" v-if="media.genres.length > 0">
                    <i class="fa fa-tag"></i> Genre :
                    <template v-for="(genre, k, i) in media.genres">{{genre.title}}<template v-if="k < media.genres.length-1">, </template></template>
                </div>
                <div class="description"><i class="fa fa-book-open"></i> Résumé : <br /> {{ media.description }}</div>
            </div>
        </div>
    </header>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";
    import Media from "../../Entity/Media";

    @Component
    export default class Header extends Vue {
        @Prop({type: Media}) media;

        mounted() {
            document.querySelector("header.media div.backdrop").style.backgroundImage = "url('" + this.media.backdrop + "')";
        }

        displayDate(date:Date|undefined){
            if(date === undefined){
                return "";
            }

            let dd = (date.getDay() < 10 ? '0' : '') + date.getDay();
            let MM = ((date.getMonth() + 1) < 10 ? '0' : '') + (date.getMonth() + 1);
            let yyyy = date.getFullYear();

            return (dd + "/" + MM + "/" + yyyy);
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
        }
    }
</style>
