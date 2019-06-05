import axios from 'axios';
import Source from "../Entity/Source";

export default class SourceAPI {
    static baseUrl:String = '/api/source/';

    /**
     * Search on the server
     */
    static getAll() {
        return axios.get(this.baseUrl + 'all');
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
