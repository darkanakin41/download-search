<template>
    <div>
        <div class="drawer-header" v-if="isAuthenticated && !securityState.loading">
            <Card />
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
    import {Getter, State} from 'vuex-class';
    import VueRouter from "vue-router";
    import Login from "../../app/Security/Login.vue";
    import Loading from "./Loading.vue";
    import {SecurityState} from "../../app/Store/Security/types";
    import Card from "../../app/Component/Account/Card.vue";

    const namespace: string = 'security';

    Vue.use(VueRouter);
    @Component({
        components: {Card, Loading, Login}
    })
    export default class LeftMenu extends Vue {
        @Prop({type: Array}) items;
        @State('security') securityState: SecurityState;
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
