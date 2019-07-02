import Vue from "vue";
import Vuex, {StoreOptions} from 'vuex';
import {RootState} from './types';
import {notification} from './Notification';
import {security} from './Security';
import {source} from './Source';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
    state: {
        version: '1.0.0'
    },
    modules: {
        notification,
        security,
        source
    }
};

export default new Vuex.Store<RootState>(store);
