import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { SourceState } from './types';
import { RootState } from '../types';

export const state: SourceState = {
    sources: [],
    error: null,
    loading: false,
    loaded: false,
};

const namespaced: boolean = true;

export const source: Module<SourceState, RootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations
};
