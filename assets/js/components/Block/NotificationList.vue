<template>
    <v-list class="notification-list">
        <v-list-tile v-for="(item, index) in getItems()" :key="index">
            <router-link v-if="item.getRouteName()" :to="{name: item.getRouteName(), params: item.getRouteParams()}">
                <Item :item="item" />
            </router-link>
            <Item v-else :item="item" />
        </v-list-tile>

        <v-list-tile v-if="items.length > maxItems && moreLinkName !== ''" class="more">
            <router-link :to="{name: moreLinkName}" exact>
                Voir plus ...
            </router-link>
        </v-list-tile>
    </v-list>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";
    import Item from "../../app/Component/Notification/Item";

    @Component({
        components: {Item}
    })
    export default class NotificationList extends Vue {
        @Prop({type: Array}) items;
        @Prop({default: -1}) maxItems;
        @Prop({type: String, default: ''}) moreLinkName;

        getItems() {
            if (this.maxItems !== -1) {
                return this.items.slice(0, this.maxItems);
            }
            return this.items;
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../../libs/theming/mixins";
    @import "../../../scss/common/config";

    .notification-list {
        min-width: 350px;

        a {
            width: 100%;
            text-decoration: none;
        }

        .more {
            a {
                @include transition(all .35s linear);
                background-color: transparentize($notificationDefaultBackground, .4);
                padding: .5rem .7rem;
                color: transparentize($notificationDefaultColor, .2);;
                text-align: center;
                text-transform: uppercase;
                font-size: .9rem;
                font-weight: $weightBold;

                &:hover {
                    @include transition(all .15s linear);
                    background-color: $notificationDefaultBackground;
                    color: $notificationDefaultColor;
                }
            }
        }


    }
</style>
