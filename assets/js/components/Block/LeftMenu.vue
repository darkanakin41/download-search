<template>
    <div>
        <div class="drawer-header">
            <div class="close">
                <a data-close>
                    <i class="fas fa-times link-icon"></i>
                </a>
                <a @click="logout" v-if="user !== null && !loading">
                    <i class="fas fa-sign-out-alt link-icon"></i>
                </a>
            </div>
            <template v-if="user !== null && !loading">
                <div class="image">
                    <img src="../../../assets/leftmenu-header-background.jpg" alt="Banner profil image">
                </div>
                <div class="user">
                    <div class="avatar">
                        <img src="../../../assets/avatar.jpg" :alt="user.username" title="user.username" />
                    </div>
                    <div class="id">
                        <span class="pseudo">{{user.username}}</span>
                        <span class="mail">{{user.email}}</span>
                    </div>
                </div>
            </template>
            <Login v-else-if="!loading" v-model="user" />
            <Loading v-if="loading" :fixed="false" />
        </div>
        <ul class="menu vertical accordion-menu" data-accordion-menu>
            <li v-for="item in items">
                <template v-if="item.children === undefined">
                    <router-link :to="{name: item.name}" exact>
                        <i v-if="item.icon !== undefined" :class="getIconClasses(item.icon)"></i>
                        {{item.label}}
                    </router-link>
                </template>
                <template v-else>
                    <a>{{ item.label }}</a>
                    <ul class="vertical menu nested">
                        <li v-for="child in item.children">
                            <router-link :to="{name: child.name}" exact>
                                <i v-if="child.icon !== undefined" :class="getIconClasses(child.icon)"></i>
                                <span class="link-label">{{child.label}}</span>
                            </router-link>
                        </li>
                    </ul>
                </template>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";
    import VueRouter from "vue-router";
    import Session from "../Session";
    import Login from "../../app/Security/Login.vue";
    import SecurityAPI from "../../app/API/SecurityAPI";
    import Loading from "./Loading.vue";

    Vue.use(VueRouter);
    @Component({
        components: {Loading, Login}
    })
    export default class LeftMenu extends Vue {
        @Prop({type: Array}) items;
        user:any = null;
        loading: Boolean;

        data() {
            return {
                loading: false,
                user: Session.getObject('user'),
            }
        }

        getIconClasses(icon: String) {
            return icon + " link-icon";
        }

        logout() {
            if (Session.getObject('user') !== null) {
                this.loading = true;
                SecurityAPI.logout(() => {
                    this.user = null;
                    this.loading = false;
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../../libs/theming/mixins";
    @import "../../../scss/common/config";

    .drawer-header {
        position: relative;
        z-index: 1;
        background-color: #161616;
        @include box-shadow(0 -2px 3px rgba(0, 0, 0, .33), 0 -7px 7px rgba(0, 0, 0, .2), 0 -20px 20px rgba(0, 0, 0, .1));
        @include transition(all .2s cubic-bezier(.4, 0, .2, 1));

        .close {
            display:flex;
            flex-direction: column;
            position: absolute;
            top: 5px;
            right: 0;

            a {
                padding: 0 1rem .7rem 1rem;
                color: white;
                @include opacity(.5);
                @include transition(all .2s linear);

                &:hover {
                    @include opacity(1);
                }
            }
        }

        .image {
            height: 144px;
            overflow: hidden;
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

            .avatar {
                margin: 0 auto;
                width: 90px;
                height: 90px;
                border-radius: 50%;
                overflow: hidden;
                box-shadow: 0 1px 4px rgba(0, 0, 0, .25);
            }

            .id {
                $paddingSides: 16px;
                padding: 8px $paddingSides;
                text-align: center;

                & > * {
                    display: block;
                    max-width: ($drawerWidth - ($paddingSides * 2));
                    width: ($drawerWidth - ($paddingSides * 2));
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    position: relative;
                }

                .pseudo {
                    font-size: 1em;
                    font-weight: bold;
                }

                .mail {
                    font-size: .80em;
                    @include opacity(.4);
                }
            }
        }
    }

    .menu {
        li {
            padding-right: 16px;

            a {
                height: 40px;
                padding: 0 12px 0 24px;
                border-radius: 0 20px 20px 0;
                line-height: 40px;
                color: inherit;
                font-size: 1rem;
                font-weight: bold;
                @include transition(all .5s ease);

                .link-icon {
                    width: 30px;
                    @include opacity(.5);
                    text-align: center;
                }

                .link-label {
                    @include opacity(.7);
                    padding-left: 15px;
                }

                &:hover {
                    background: transparentize(white, .95);
                }

                &.active {
                    background: $mainColor;
                    color: #333;
                    @include opacity(1);

                    .link-icon {
                        @include opacity(1);
                    }
                }
            }

            .submenu {
                margin-left: 0;

                li {
                    padding-right: 0;

                    a {
                        padding-left: 1.2rem;
                    }
                }
            }

            &.drawer-toggle {
                margin-bottom: 200px;
            }
        }
    }
</style>
