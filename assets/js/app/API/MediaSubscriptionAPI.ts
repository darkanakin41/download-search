import axios from 'axios';
import MediaSubscription from "../Entity/MediaSubscription";

export default class MediaSubscriptionAPI {
    static baseUrl: String = '/api/media-subscription/';

    /**
     * Search on the server
     * @param callback the code to be executed on success
     */
    static getAll(callback: any) {
        axios.get(this.baseUrl + 'all')
            .then((response) => {
                let items: Array<MediaSubscription> = [];
                response.data.forEach((item: any) => {
                    items.push(this.convert(item));
                });
                callback(items)
            });
    }

    /**
     * Search on the server
     * @param mediaId
     * @param callback the code to be executed on success
     */
    static getForMedia(mediaId: number, callback: any) {
        axios.post(this.baseUrl + 'retrieve', {'media': mediaId})
            .then((response) => {
                let subscription: MediaSubscription | undefined = undefined;
                if (response.data !== null) {
                    subscription = this.convert(response.data);
                }
                callback(subscription);
            });
    }

    /**
     * Search on the server
     * @param mediaId
     * @param callback the code to be executed on success
     */
    static add(mediaId: number, callback: any) {
        axios.post(this.baseUrl + 'add', {'media': mediaId})
            .then((response) => {
                let subscription: MediaSubscription | undefined = undefined;
                if (response.data !== null) {
                    subscription = this.convert(response.data);
                }
                callback(subscription);
            });
    }

    /**
     * Search on the server
     * @param mediaId
     * @param callback the code to be executed on success
     */
    static remove(mediaId: number, callback: any) {
        axios.post(this.baseUrl + 'remove', {'media': mediaId})
            .then((response) => {
                callback(undefined);
            });
    }

    /**
     * Process input array and return the list of objects
     *
     * @param data
     *
     * @return MediaSubscription
     */
    static convert(data: Object) {
        return new MediaSubscription(data);
    }
}
