<template>
    <v-card class="v-card-profile">
        <div class="image">
            <img src="../../../../assets/leftmenu-header-background.jpg" alt="Banner profil image">
        </div>
        <div class="user">
            <v-avatar :title="securityState.user.username" :size="90" color="grey lighten-4">
                <img src="../../../../assets/avatar.jpg" alt="avatar">
            </v-avatar>
            <div class="id">
                <span class="pseudo">{{securityState.user.username}}</span>
                <span class="mail">{{securityState.user.email}}</span>
            </div>
        </div>
    </v-card>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import {State} from "vuex-class";
    import {SecurityState} from "../../Store/Security/types";

    @Component({
        components: {}
    })
    export default class Card extends Vue {
        @State('security') securityState: SecurityState;
    }
</script>

<style lang="scss" scoped>
    @import "../../../../libs/theming/mixins";
    @import "../../../../scss/common/config";

    .v-card-profile {
        .image {
            height: 144px;
            overflow: hidden;

            img {
                width: 100%;
            }
        }

        .user {
            position: relative;
            z-index: 0;
            margin-top: -54px;
            padding: 8px 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-content: center;

            .v-avatar {
                margin: 0 auto;
                width: 90px;
                height: 90px;
                border-radius: 50%;
                overflow: hidden;
                @include box-shadow(0 1px 4px rgba(0, 0, 0, .25));

                img {
                    width: 100%;
                }
            }

            .id {
                text-align: center;

                & > * {
                    display: block;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    position: relative;
                }

                .pseudo {
                    font-size: 1em;
                    font-weight: bold;
                }

                .mail,
                .logout {
                    font-size: .80em;
                    @include opacity(.4);
                }

                .logout {
                    @include transition(all .25s $cubicFastInSlowOut);

                    a {
                        color: inherit;
                    }

                    &:hover {
                        @include opacity(1);
                        @include transition(all .15s $cubicFastInSlowOut);
                    }
                }
            }
        }
    }
</style>
