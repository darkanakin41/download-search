import NotificationMedia from "../Entity/NotificationMedia";
import NotificationMediaSeasonEpisode from "../Entity/NotificationMediaSeasonEpisode";

export default class NotificationFactory {
    static create(data: any) {
        if (data.hasOwnProperty('media')) {
            return new NotificationMedia(data)
        } else if (data.hasOwnProperty('mediaSeasonEpisode')) {
            return new NotificationMediaSeasonEpisode(data)
        }
        return null;
    }
}
