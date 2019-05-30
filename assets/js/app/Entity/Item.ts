import Source from "./Source";
import Media from "./Media";

export default class Item {
    id: number;
    title: String;
    category: String;
    quality: String;
    language: String;
    genres: Array<String>;
    season: number;
    lastPart: String;
    fullUrl: String;
    source: Source;
    media: Media;

    constructor(data: any) {
        this.id = data.id;
        this.title = data.title;
        this.category = data.category;
        this.quality = data.quality;
        this.language = data.language;
        this.genres = data.genres;
        this.season = data.season;
        this.lastPart = data.lastPart;
        this.fullUrl = data.fullUrl;
        this.source = new Source(data.source);
        if (data.media !== null) {
            this.media = new Media(data.media);
        } else {
            this.media = data.media;
        }
    }
}
