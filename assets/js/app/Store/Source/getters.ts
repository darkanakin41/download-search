import { GetterTree } from 'vuex';
import { SourceState } from './types';
import { RootState } from '../types';

export const getters: GetterTree<SourceState, RootState> = {
    isLoading(state){
        return state.loading;
    }
};
