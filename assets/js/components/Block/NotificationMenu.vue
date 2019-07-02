<template>
    <v-menu>
        <template v-slot:activator="{ on }">
            <v-btn color="primary" dark v-on="on" class="notification-button">
                <i class="far fa-bell" v-if="!isLoading"></i>
                <i class="fa fa-spinner fa-spin" v-if="isLoading"></i>
            </v-btn>
        </template>
        <NotificationList :v-if="!isLoading" :maxItems="5" :items="notificationsState.notifications" />
    </v-menu>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import {Action, Getter, State} from "vuex-class";
    import {NotificationState} from "../../app/Store/Notification/types";
    import NotificationList from "./NotificationList";

    const namespace: string = 'notification';

    @Component({
        components: {NotificationList}
    })
    export default class NotificationMenu extends Vue {
        @Action('getAll', {namespace}) refreshNotifications: any;
        @Getter('isLoading', {namespace}) isLoading: Boolean;
        @State('notification') notificationsState: NotificationState;

        mounted() {
            this.refreshNotifications();
            setInterval(() => { this.refreshNotifications()}, 300000)
        }

    }
</script>

<style lang="scss" scoped>
    @import "../../../libs/theming/mixins";
    @import "../../../scss/common/config";

    .notification-button {
        border: none;
        box-shadow: none !important;
        min-width: auto;
        padding: 0 3px;
        border-radius: 50%;
    }
</style>
