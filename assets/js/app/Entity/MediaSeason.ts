import Media from "./Media";

export default class MediaSeason {
    id: number;
    title: String;
    description: String;
    number: Number;
    poster: String;
    updated: String;
    theMovieDbId: String;
    releaseDate: Date|undefined = undefined;
    media: Media;

    constructor(data: any) {
        this.id = data.id;
        this.title = data.title;
        this.description = data.description;
        this.number = data.number;
        this.poster = data.posterFullURL;
        this.updated = data.updated;
        this.theMovieDbId = data.theMovieDbId;
        if(data.releaseDate !== null){
            this.releaseDate = new Date(data.releaseDate);
        }
        this.media = new Media(data.media);
    }
}
