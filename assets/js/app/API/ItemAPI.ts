import axios from 'axios';
import Item from "../Entity/Item";

export default class ItemAPI{

    /**
     * Search on the server
     * @param q
     * @param callback the code to be executed on success
     */
    static search(q:string, callback:any){
        axios({
            method: 'SEARCH',
            url: '/api/item/search',
            data: {
                q: q,
            }
        }).then(callback);
    }
    /**
     * Search on the server
     * @param id
     * @param callback the code to be executed on success
     */
    static retrieve(id:number, callback:any){
        axios({
            method: 'POST',
            url: '/api/item/retrieve',
            data: {
                id: id,
            }
        }).then(callback);
    }

    /**
     * Process input array and return the list of objects
     *
     * @param data
     *
     * @return Item
     */
    static convert(data:Object){
        return new Item(data);
    }
}
