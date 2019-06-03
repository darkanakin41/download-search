import axios from 'axios';
import MediaSeasonEpisode from "../Entity/MediaSeasonEpisode";

export default class MediaSeasonEpisodeAPI {
    static baseUrl:String = '/api/media-season-episode/';

    /**
     * Search on the server
     * @param seasonId
     * @param callback the code to be executed on success
     */
    static getForSeason(seasonId: number, callback: any) {
        axios.post(this.baseUrl + 'retrieve', {season: seasonId,})
            .then((response) => {
                let items: Array<MediaSeasonEpisode> = [];
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
     * @return MediaSeasonEpisode
     */
    static convert(data: Object) {
        return new MediaSeasonEpisode(data);
    }
}
