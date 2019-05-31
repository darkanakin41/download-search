import axios from 'axios';
import Source from "../Entity/Source";

export default class SourceAPI {

    /**
     * Search on the server
     * @param callback the code to be executed on success
     */
    static getAll(callback: any) {
        axios.get('/api/source/all')
            .then((response) => {
                let items: Array<Source> = [];
                response.data.forEach((item: Object) => {
                    items.push(SourceAPI.convert(item));
                });
                callback(items)
            });
    }

    /**
     * Process input array and return the list of objects
     *
     * @param data
     *
     * @return Source
     */
    static convert(data:Object) {
        return new Source(data);
    }
}
