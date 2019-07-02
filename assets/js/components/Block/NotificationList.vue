<template>
    <v-list class="notification-list">
        <v-list-tile v-for="(item, index) in items.slice(0,maxItems)" :key="index" class="item" :class="item.getClasses()">
            <div class="item-icon">
                <i :class="item.getIcon()"></i>
            </div>
            <div class="item-body">
                <div class="item-header">
                    <span class="item-title">{{ item.getTitle() }}</span>
                    <span class="item-date">{{ formatDate(item.date) }}</span>
                </div>
                <p>{{ item.getMessage() }}</p>
            </div>
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

    @Component
    export default class NotificationList extends Vue {
        @Prop({type: Array}) items;
        @Prop({default: -1}) maxItems;
        @Prop({type: String, default: ''}) moreLinkName;
    }
</script>

<style lang="scss" scoped>
    @import "../../../libs/theming/mixins";
    @import "../../../scss/common/config";

    $notification-icon-width: 45px;
    $notification-icon-size: 30px;

    $notification-default-color: white;
    $notification-default-background: $grey;

    @mixin make-notification($background, $color : 'white') {
        .item-icon {
            @include transition(all .35s linear);
            background-color: transparentize($background, .4);
            color: transparentize($color, .2);
        }
        &:hover {
            .item-icon {
                @include transition(all .35s linear);
                background-color: $background;
                color: $color;
            }
        }
    }

    .notification-list {
        min-width: 350px;

        .more {
            a {
                @include transition(all .35s linear);
                background-color: transparentize($notification-default-background, .4);
                padding: .5rem .7rem;
                color: transparentize($notification-default-color, .2);;
                text-align: center;
                text-transform: uppercase;
                font-size: .9rem;
                font-weight: $weightBold;

                &:hover {
                    @include transition(all .15s linear);
                    background-color: $notification-default-background;
                    color: $notification-default-color;
                }
            }
        }

        .item {
            background: transparent !important;
            @include transition(all .35s linear);
            font-family: "Roboto Condensed", sans-serif;
            position: relative;
            padding: 7px 12px;
            color: $grey;

            display: flex;

            & > *{
                width: 100%;
            }

            .item-icon {
                flex-basis: $notification-icon-width;
                height: $notification-icon-width;
                width: $notification-icon-width;
                border-radius: 50%;
                text-align: center;
                line-height: $notification-icon-width;
                font-size: $notification-icon-size;
            }

            @include make-notification($notification-default-background, $notification-default-color);

            .item-body {
                flex-grow: 1;
                padding: 3px 7px;

                .item-header {
                    height: 20px;
                    display: flex;

                    .item-title {
                        font-weight: bold;
                        flex-grow: 1;
                    }

                    .item-date {
                        @include opacity(.4);
                        flex-grow: 1;
                        font-size: 12px;
                        text-align: right;
                    }
                }

                & > p {
                    display: block;
                    line-height: 1.2;
                    margin: 0;
                }
            }

            &:hover,
            &:focus {
                background: transparentize(black, .99);
                @include transition(all .15s linear);
            }
        }
    }

    .notification-list {
        .item {
            &.red {
                @include make-notification($red, white);
            }

            &.yellow {
                @include make-notification($yellow, white);
            }

            &.green {
                @include make-notification($green, white);
            }

            &.blue {
                @include make-notification($blue, white);
            }

            &.purple {
                @include make-notification($purple, white);
            }

            &.pink {
                @include make-notification($pink, white);
            }

            &.orange {
                @include make-notification($orange, white);
            }
        }
    }
</style>
