import axios from 'axios';
import Source from "../Entity/Source";

export default class SourceAPI{

    /**
     * Search on the server
     * @param q
     * @param callback the code to be executed on success
     */
    static getAll(callback:any){
        axios({
            method: 'GET',
            url: '/api/source/all',
        }).then(callback);
    }

    /**
     * Process input array and return the list of objects
     *
     * @param data
     *
     * @return Source[]
     */
    static convert(data:Array<any>){
        let retour:Array<Source> = [];

        data.forEach((item) => {
            retour.push(new Source(item));
        });

        return retour;
    }
}
