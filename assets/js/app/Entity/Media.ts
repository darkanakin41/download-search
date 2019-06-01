import Genre from "./Genre";

export default class Media {
    id: number;
    title: String;
    description: String;
    category: String;
    poster: String;
    backdrop: String;
    updated: String;
    theMovieDbId: String;
    status: String;
    releaseDate: Date|undefined = undefined;
    averageNote: Number;
    genres: Array<Genre> = [];

    constructor(data: any) {
        this.id = data.id;
        this.title = data.title;
        this.description = data.description;
        this.category = data.category;
        this.poster = data.posterFullURL;
        this.backdrop = data.backdropFullURL;
        this.updated = data.updated;
        this.theMovieDbId = data.theMovieDbId;
        this.status = data.status;
        if(data.releaseDate !== null){
            this.releaseDate = new Date(data.releaseDate);
        }
        this.averageNote = data.averageNote;
        data.genres.forEach((g:Object) => {
            this.genres.push(new Genre(g));
        })
    }
}
