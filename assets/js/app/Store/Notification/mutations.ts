import Notification from '../../Entity/Notification';
import {MutationTree} from 'vuex';
import {NotificationState} from './types';
import NotificationFactory from "../../Factory/NotificationFactory";

export const mutations: MutationTree<NotificationState> = {
    NOTIFICATION_LOADING(state) {
        state.loading = true;
        state.error = null;
    },
    NOTIFICATION_LOADED(state, payload: Array<Notification>) {
        state.loading = false;
        state.error = null;
        let notifications: Array<Notification> = [];
        payload.forEach((item) => {
            let notification = NotificationFactory.create(item);
            if (notification !== null) {
                notifications.push(notification);
            }
        });
        state.notifications = notifications;
    },
    NOTIFICATION_ERROR(state, error) {
        state.loading = false;
        state.error = error;
        state.notifications = [];
    },
};
