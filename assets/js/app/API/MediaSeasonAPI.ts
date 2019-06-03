import axios from 'axios';
import MediaSeason from "../Entity/MediaSeason";

export default class MediaSeasonAPI {
    static baseUrl:String = '/api/media-season/';

    /**
     * Search on the server
     * @param mediaId
     * @param callback the code to be executed on success
     */
    static getForMedia(mediaId: number, callback: any) {
        axios.post(this.baseUrl + 'retrieve', {media: mediaId,})
            .then((response) => {
                let items: Array<MediaSeason> = [];
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
     * @return MediaSeason
     */
    static convert(data: Object) {
        return new MediaSeason(data);
    }
}
