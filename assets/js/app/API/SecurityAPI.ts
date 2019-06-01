import axios from 'axios';
import Item from "../Entity/Item";
import User from "../Entity/User";
import Session from "../../components/Session";

export default class SecurityAPI {

    /**
     * Login the user
     *
     * @param login
     * @param password
     * @param callback the code to be executed on success
     */
    static login(login:String, password:String, callback: CallableFunction, callbackError: CallableFunction) {
        if(Session.getObject('user') !== null){
            return callback(Session.getObject('user'));
        }

        axios.post('/api/security/login', {
            username:login,
            password:password,
        })
        .then((response) => {
            if(response.data === {}){
                callbackError("Identifiant/Mot de passe invalide");
                return;
            }
            if(response.data.error !== undefined){
                callbackError(response.data.error);
                return;
            }
            let item = SecurityAPI.convert(response.data);
            Session.setObject('user', item);
            callback(item);
        }).catch(() => {
            callbackError("Une erreur est survenue durant votre authentification");
        });
    }
    /**
     * Logout current user
     *
     * @param callback the code to be executed on success
     */
    static logout(callback: any = () => {}) {
        if(Session.getObject('user') === null){
            return callback();
        }
        axios.post('/api/security/logout')
            .then(() => {
                callback();
            });
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
