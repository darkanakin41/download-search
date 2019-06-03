import axios from 'axios';
import Item from "../Entity/Item";

export default class ItemAPI {
    static baseUrl:String = '/api/item/';

    /**
     * Search on the server
     * @param q
     * @param callback the code to be executed on success
     */
    static search(q: string, callback: any) {
        axios.post(this.baseUrl + 'search', {q: q,})
            .then((response) => {
                let items: Array<Item> = [];
                response.data.forEach((item: Object) => {
                    items.push(this.convert(item));
                });
                callback(items);
            });
    }

    /**
     * Search on the server
     * @param id
     * @param callback the code to be executed on success
     */
    static get(id: number, callback: any) {
        axios.post(this.baseUrl + 'retrieve', {id: id,})
            .then((response) => {
                let item: Item = this.convert(response.data);
                callback(item);
            });
    }

    /**
     * Search on the server
     * @param mediaId
     * @param callback the code to be executed on success
     */
    static getForMedia(mediaId: number, callback: any) {
        axios.post(this.baseUrl + 'retrieve', {media: mediaId,})
            .then((response) => {
                let items: Array<Item> = [];
                response.data.forEach((item: Object) => {
                    items.push(this.convert(item));
                });
                callback(items);
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
        return new Item(data);
    }
}
