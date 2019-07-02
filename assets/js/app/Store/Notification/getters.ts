import { GetterTree } from 'vuex';
import { NotificationState } from './types';
import { RootState } from '../types';

export const getters: GetterTree<NotificationState, RootState> = {
    isLoading(state){
        return state.loading;
    }
};
