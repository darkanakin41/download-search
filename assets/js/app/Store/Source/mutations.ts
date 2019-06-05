import {MutationTree} from 'vuex';
import {SourceState} from './types';
import Source from "../../Entity/Source";

export const mutations: MutationTree<SourceState> = {
    SOURCE_LOADING(state) {
        state.loading = true;
        state.error = null;
    },
    SOURCE_LOADED(state, payload: Array<Source>) {
        state.loading = false;
        state.error = null;
        state.sources = payload;
    },
    SOURCE_ERROR(state, error) {
        state.loading = false;
        state.error = error;
        state.sources = [];
    },
};
