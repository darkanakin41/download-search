import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { SecurityState } from './types';
import { RootState } from '../types';

export const state: SecurityState = {
    user: null,
    error: null,
    loading: false,
};

const namespaced: boolean = true;

export const security: Module<SecurityState, RootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations
};
