import Media from "./Media";

export default class MediaSubscription {
    id: number;
    created:Date;
    media:Media;

    constructor(data: any) {
        this.id = data.id;
        this.created = new Date(data.created);
        this.media = new Media(data.media);
    }
}
