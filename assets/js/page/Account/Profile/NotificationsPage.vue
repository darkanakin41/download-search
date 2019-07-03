<template>
    <v-container fluid>
        <v-card>
            <v-sheet>
                <Loading :position="'absolute'" :displayed="isLoading" />
                <NotificationList v-if="!isLoading && notificationsState.notifications.length > 0" :items="notificationsState.notifications" />
                <div v-if="!isLoading && notificationsState.notifications.length === 0" class="callout warning">
                    <b>Vous n'avez pas de notifications</b>
                </div>
            </v-sheet>
        </v-card>
    </v-container>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import {Action, Getter, State} from "vuex-class";
    import {NotificationState} from "../../../app/Store/Notification/types";
    import NotificationList from "../../../components/Block/NotificationList.vue";
    import Loading from "../../../components/Block/Loading.vue";

    const namespace: string = 'notification';

    @Component({
        components: {Loading, NotificationList}
    })
    export default class NotificationsPage extends Vue {
        @Action('getAll', {namespace}) refreshNotifications: any;
        @Getter('isLoading', {namespace}) isLoading: Boolean;
        @State('notification') notificationsState: NotificationState;

        mounted() {
            this.refreshNotifications();
        }
    }
</script>

<style lang="scss" scoped>
</style>
