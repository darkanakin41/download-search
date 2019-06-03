import axios from 'axios';
import Source from "../Entity/Source";

export default class SourceAPI {
    static baseUrl:String = '/api/source/';

    /**
     * Search on the server
     * @param callbackSuccess the code to be executed on success
     */
    static getAll(callbackSuccess: any) {
        axios.get(this.baseUrl + 'all')
            .then((response) => {
                let items: Array<Source> = [];
                response.data.forEach((item: Object) => {
                    items.push(this.convert(item));
                });
                callbackSuccess(items)
            });
    }

    /**
     * Process input array and return the list of objects
     *
     * @param data
     *
     * @return Source
     */
    static convert(data: Object) {
        return new Source(data);
    }
}
