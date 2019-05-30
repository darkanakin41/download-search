export default class Media {
    id: number;
    title: String;
    description: String;
    category: String;
    poster: String;
    backdrop: String;
    updated: String;
    theMovieDbId: String;

    constructor(data: any) {
        this.id = data.id;
        this.title = data.title;
        this.description = data.description;
        this.category = data.category;
        this.poster = data.posterFullURL;
        this.backdrop = data.backdropFullURL;
        this.updated = data.updated;
        this.theMovieDbId = data.theMovieDbId;
    }
}
