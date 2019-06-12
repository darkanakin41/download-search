import {ActionTree} from 'vuex';
import {SecurityState} from './types';
import {RootState} from '../types';
import SecurityAPI from "../../API/SecurityAPI";


export const actions: ActionTree<SecurityState, RootState> = {
    login({commit}, payload): any {
        commit('SECURITY_LOADING');

        return SecurityAPI.login(payload.login, payload.password)
            .then(res => commit('SECURITY_LOGIN', res.data))
            .catch(err => commit('SECURITY_ERROR', err));
    },
    register({commit}, payload): any {
        commit('SECURITY_LOADING');

        return SecurityAPI.register(payload)
            .then(res => commit('SECURITY_REGISTER', res.data))
            .catch(err => commit('SECURITY_ERROR', err));
    },
    logout({commit}): any {
        commit('SECURITY_LOADING');

        return SecurityAPI.logout()
            .then(() => commit('SECURITY_LOGOUT'))
            .catch(err => commit('SECURITY_ERROR', err));
    },
    checkAuthentification({commit}): any {
        commit('SECURITY_LOADING');

        return SecurityAPI.loginCheck()
            .then(res => commit('SECURITY_LOGIN', res.data))
            .catch(err => commit('SECURITY_ERROR', err));
    }
};
