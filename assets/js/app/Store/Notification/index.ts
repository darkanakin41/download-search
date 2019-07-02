import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { NotificationState } from './types';
import { RootState } from '../types';

export const state: NotificationState = {
    notifications: [],
    error: null,
    loading: false,
    loaded: false,
};

const namespaced: boolean = true;

export const notification: Module<NotificationState, RootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations
};
