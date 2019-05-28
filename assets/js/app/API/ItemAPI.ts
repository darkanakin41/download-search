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
     * Process input array and return the list of objects
     *
     * @param data
     *
     * @return Item[]
     */
    static convert(data:Array<any>){
        let retour:Array<Item> = [];

        data.forEach((item) => {
            retour.push(new Item(item));
        });

        return retour;
    }
}
