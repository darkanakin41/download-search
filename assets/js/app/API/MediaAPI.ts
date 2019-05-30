import axios from 'axios';
import Media from "../Entity/Media";

export default class MediaAPI{

    /**
     * Search on the server
     * @param callback the code to be executed on success
     */
    static getAll(callback:any){
        axios({
            method: 'GET',
            url: '/api/media/all',
        }).then((response) => {
            let items:Array<Media> = [];
            response.data.forEach((item:Object) => {
                items.push(MediaAPI.convert(item));
            });
            callback(items)
        });
    }
    /**
     * Search on the server
     * @param id number
     * @param callback the code to be executed on success
     */
    static get(id:number, callback:any){
        axios({
            method: 'POST',
            url: '/api/media/retrieve',
            data: {
                id: id,
            }
        }).then((response) => {
            let item:Media = MediaAPI.convert(response.data);
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
    static convert(data:Object){
        return new Media(data);
    }
}
