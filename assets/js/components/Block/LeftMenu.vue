<template>
    <div>
        <div class="drawer-header">
            <template v-if="isAuthenticated && !securityState.loading">
                <div class="image">
                    <img src="../../../assets/leftmenu-header-background.jpg" alt="Banner profil image">
                </div>
                <div class="user">
                    <v-avatar :title="securityState.user.username" :size="90" color="grey lighten-4">
                        <img src="../../../assets/avatar.jpg" alt="avatar">
                    </v-avatar>
                    <div class="id">
                        <span class="pseudo">{{securityState.user.username}}</span>
                        <span class="mail">{{securityState.user.email}}</span>
                        <span class="logout">
                            <a @click="onLogout()" v-if="isAuthenticated && !securityState.loading">
                                <i class="fas fa-sign-out-alt link-icon"></i> Déconnexion
                            </a>
                        </span>
                    </div>
                </div>
            </template>
        </div>
        <v-list>
            <template v-for="item in menuItems">
                <template v-if="item.children === undefined">
                    <v-list-tile :to="{name: item.name}" exact>
                        <v-list-tile-action>
                            <v-icon v-if="item.icon !== undefined">{{ item.icon }}</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-title>{{item.label}}</v-list-tile-title>
                    </v-list-tile>
                </template>
                <template v-else>
                    <v-list-group>
                        <template v-slot:activator>
                            <v-list-tile>
                                <v-list-tile-title>{{ item.label }}</v-list-tile-title>
                            </v-list-tile>
                        </template>

                        <template v-for="child in item.children">
                            <v-list-tile :to="{name: child.name}" exact>
                                <v-list-tile-action>
                                    <v-icon v-if="child.icon !== undefined">{{ child.icon }}</v-icon>
                                </v-list-tile-action>
                                <v-list-tile-title>{{child.label}}</v-list-tile-title>
                            </v-list-tile>
                        </template>
                    </v-list-group>
                </template>
            </template>

            <v-list-tile :to="{name: 'security-sign-in'}" exact v-if="!isAuthenticated">
                <v-list-tile-action>
                    <v-icon>fas fa-sign-in-alt</v-icon>
                </v-list-tile-action>
                <v-list-tile-title>Connexion</v-list-tile-title>
            </v-list-tile>

            <v-list-tile :to="{name: 'security-sign-up'}" exact v-if="!isAuthenticated">
                <v-list-tile-action>
                    <v-icon>fas fa-user-plus</v-icon>
                </v-list-tile-action>
                <v-list-tile-title>Inscription</v-list-tile-title>
            </v-list-tile>
        </v-list>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue, Watch} from "vue-property-decorator";
    import {Action, Getter, State} from 'vuex-class';
    import VueRouter from "vue-router";
    import Login from "../../app/Security/Login.vue";
    import Loading from "./Loading.vue";
    import {SecurityState} from "../../app/Store/Security/types";

    const namespace: string = 'security';

    Vue.use(VueRouter);
    @Component({
        components: {Loading, Login}
    })
    export default class LeftMenu extends Vue {
        @Prop({type: Array}) items;
        @State('security') securityState: SecurityState;
        @Action('logout', {namespace}) logout: any;
        @Getter('isAuthenticated', {namespace}) isAuthenticated: Boolean;

        loading: Boolean;
        menuItems: Array = [];

        data() {
            return {
                menuItems: [],
            }
        }

        mounted() {
            this.onUserUpdated();
        }

        onLogout() {
            if (this.isAuthenticated) {
                this.logout();
            }
        }

        @Watch('isAuthenticated')
        onUserUpdated() {
            this.menuItems = this.filterItems(this.items);
        }

        /**
         * Filter items of the menu
         * @param items
         * @return items
         */
        filterItems(items: Array) {
            let filtered = [];

            items.forEach((item) => {
                if (item.children !== undefined) {
                    let itemCloned = Object.assign({}, item);
                    let children = this.filterItems(item.children);
                    if (children.length > 0) {
                        itemCloned.children = children;
                        filtered.push(itemCloned);
                    }
                } else {
                    if (item.connected === false || item.connected === undefined) {
                        filtered.push(item);
                    } else {
                        if (this.isAuthenticated) {
                            filtered.push(item);
                        }
                    }
                }
            });

            return filtered;
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../../libs/theming/mixins";
    @import "../../../scss/common/config";

    .drawer-header {
        position: relative;
        z-index: 1;

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

    .v-list {
        color: white;

        .v-icon {
            &.fa, &.fas, &.fab, &.far {
                font-size: 18px;
            }
        }
    }

</style>
