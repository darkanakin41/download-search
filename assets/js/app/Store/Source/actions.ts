import {ActionTree} from 'vuex';
import {SourceState} from './types';
import {RootState} from '../types';
import SourceAPI from "../../API/SourceAPI";


export const actions: ActionTree<SourceState, RootState> = {
    getAll({commit}): any {
        commit('SOURCE_LOADING');

        return SourceAPI.getAll()
            .then(res => commit('SOURCE_LOADED', res.data))
            .catch(err => commit('SOURCE_ERROR', err));
    },
};
