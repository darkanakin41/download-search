import { MutationTree } from 'vuex';
import { SecurityState} from './types';
import User from "../../Entity/User";

export const mutations: MutationTree<SecurityState> = {
    SECURITY_LOADING(state) {
        state.loading = true;
        state.error = null;
    },
    SECURITY_LOGIN(state, payload: User) {
        state.loading = false;
        state.error = null;
        state.user = payload;
    },
    SECURITY_LOGOUT(state) {
        state.loading = false;
        state.error = null;
        state.user = null;
    },
    SECURITY_REGISTER(state, payload: User) {
        state.loading = false;
        state.error = null;
        state.user = payload;
    },
    SECURITY_ERROR(state, error) {
        state.loading = false;
        state.error = error;
        state.user = null;
    },
};
