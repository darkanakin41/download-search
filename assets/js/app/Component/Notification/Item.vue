<template>
    <div class="notification" :class="item.getClasses()">
        <div class="notification-icon">
            <i :class="item.getIcon()"></i>
        </div>
        <div class="notification-body">
            <div class="notification-header">
                <span class="notification-title">{{ item.getTitle() }}</span>
                <span class="notification-date">{{ formatDate(item.date) }}</span>
            </div>
            <p>{{ item.getMessage() }}</p>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";
    import Notification from "../../Entity/Notification";

    @Component({
        components: {}
    })
    export default class Item extends Vue {
        @Prop({type: Notification}) item;
    }
</script>

<style lang="scss" scoped>
    @import "../../../../libs/theming/mixins";
    @import "../../../../scss/common/config";

    @mixin make-notification($background, $color : 'white') {
        border: none;
        .notification-icon {
            @include transition(all .35s linear);
            background-color: transparentize($background, .4);
            color: transparentize($color, .2);
        }
        &:hover {
            .notification-icon {
                @include transition(all .35s linear);
                background-color: $background;
                color: $color;
            }
        }
    }

    .notification {
        background: transparent !important;
        @include transition(all .35s linear);
        font-family: "Roboto Condensed", sans-serif;
        position: relative;
        padding: 7px 0;
        color: $grey;
        width: 100%;
        min-height: $notificationIconWidth+14;

        display: flex;

        & > * {
            width: 100%;
        }

        .notification-icon {
            flex-basis: $notificationIconWidth;
            height: $notificationIconWidth;
            width: $notificationIconWidth;
            border-radius: 50%;
            text-align: center;
            line-height: $notificationIconWidth;
            font-size: $notificationIconSize;
            min-width: $notificationIconWidth;
        }

        @include make-notification($notificationDefaultBackground, $notificationDefaultColor);

        .notification-body {
            flex-grow: 1;
            padding: 3px 7px;

            .notification-header {
                height: 20px;
                display: flex;

                .notification-title {
                    font-weight: bold;
                    flex-grow: 1;
                }

                .notification-date {
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

                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
        }

        &:hover,
        &:focus {
            background: transparentize(black, .99);
            @include transition(all .15s linear);
        }


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
</style>
