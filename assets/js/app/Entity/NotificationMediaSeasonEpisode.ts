import Notification from "./Notification";
import Media from "./Media";
import MediaSeasonEpisode from "./MediaSeasonEpisode";

export default class NotificationMediaSeasonEpisode extends Notification {
    episode: MediaSeasonEpisode;

    constructor(data: any) {
        super(data);
        this.episode = new MediaSeasonEpisode(data.mediaSeasonEpisode);
    }

    getTitle(): string {
        switch (this.action) {
            default:
                return this.episode.season.media.title;
        }
    }

    getMessage(): string {
        switch (this.action) {
            case 'new_item':
                return 'L\'épisode S' + this.episode.season.number + 'E' + this.episode.number + ' sort aujourd\'hui';
            default :
                return "";
        }
    }

    getRouteName(): string {
        switch (this.action) {
            default:
                return 'media-view-items';
        }
    }

    getRouteParams(): any {
        switch (this.action) {
            default:
                return {id: this.episode.season.media.id};
        }
    }

    getClasses(): any {
        switch (this.action) {
            case 'new_item':
                return 'green';
            default:
                return 'blue';
        }
    }

    getIcon(): any {
        switch (this.action) {
            case 'new_item':
                return 'fas fa-download';
            default:
                return 'far fa-bell';
        }
    }
}
