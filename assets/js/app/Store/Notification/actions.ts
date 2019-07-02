import {ActionTree} from 'vuex';
import {NotificationState} from './types';
import {RootState} from '../types';
import NotificationAPI from "../../API/NotificationAPI";


export const actions: ActionTree<NotificationState, RootState> = {
    getAll({commit}): any {
        commit('NOTIFICATION_LOADING');

        return NotificationAPI.getAll()
            .then(res => commit('NOTIFICATION_LOADED', res.data))
            .catch(err => commit('NOTIFICATION_ERROR', err));
    },
};
