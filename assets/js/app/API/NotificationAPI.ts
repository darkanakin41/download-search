import axios from 'axios';
import Item from "../Entity/Item";
import User from "../Entity/User";

export default class NotificationAPI {
    static baseUrl: string = '/api/notification/';

    /**
     * Login the user
     */
    static getAll() {
        return axios.get(this.baseUrl + 'all');
    }
}
