import { GetterTree } from 'vuex';
import { SecurityState } from './types';
import { RootState } from '../types';

export const getters: GetterTree<SecurityState, RootState> = {
    isAuthenticated(state){
        return state.user !== null;
    },
    isLoading(state){
        return state.loading;
    }
};
