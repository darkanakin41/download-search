import Notification from "./Notification";
import Media from "./Media";

export default class NotificationMedia extends Notification {
    media: Media;

    constructor(data: any) {
        super(data);
        this.media = new Media(data.media);
    }

    getTitle(): string {
        switch (this.action) {
            default:
                return this.media.title;
        }
    }

    getMessage(): string {
        switch (this.action) {
            case 'new_item':
                return 'Un nouveau lien de téléchargement est disponible';
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
                return {id: this.media.id};
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
