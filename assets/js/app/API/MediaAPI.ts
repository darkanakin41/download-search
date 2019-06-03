import axios from 'axios';
import Media from "../Entity/Media";

export default class MediaAPI {
    static baseUrl:String = '/api/media/';

    /**
     * Search on the server
     * @param callback the code to be executed on success
     */
    static getAll(callback: any) {
        axios.get(this.baseUrl + 'all')
            .then((response) => {
                let items: Array<Media> = [];
                response.data.forEach((item: Object) => {
                    items.push(this.convert(item));
                });
                callback(items)
            });
    }

    /**
     * Search on the server
     * @param id number
     * @param callback the code to be executed on success
     */
    static get(id: number, callback: any) {
        axios.post(this.baseUrl + 'retrieve', {id: id})
            .then((response) => {
                let item: Media = this.convert(response.data);
                callback(item);
            });
    }

    /**
     * Process input array and return the list of objects
     *
     * @param data
     *
     * @return Media
     */
    static convert(data: Object) {
        return new Media(data);
    }
}
