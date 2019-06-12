import axios from 'axios';
import Item from "../Entity/Item";
import User from "../Entity/User";

export default class SecurityAPI {
    static baseUrl: String = '/api/security/';

    /**
     * Login the user
     *
     * @param login
     * @param password
     */
    static login(login: String, password: String) {
        return axios.post(this.baseUrl + 'login', {
            username: login,
            password: password,
        });
    }

    /**
     * Check if the user is logged in or not
     *
     */
    static loginCheck() {
        return axios.get(this.baseUrl + 'login');
    }

    /**
     * Register the account of the user
     * @param payload
     */
    static register(payload: Object) {
        return axios.post(this.baseUrl + 'register', payload);
    }

    /**
     * Logout current user
     */
    static logout() {
        return axios.post(this.baseUrl + 'logout');
    }

    /**
     * Process input array and return the list of objects
     *
     * @param data
     *
     * @return Item
     */
    static convert(data: Object) {
        return new User(data);
    }
}
