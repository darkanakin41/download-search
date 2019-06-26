import Genre from "./Genre";

export default class Media {
    id: number;
    title: String;
    description: String;
    category: String;
    poster: String|null;
    backdrop: String|null;
    updated: String;
    source: String;
    sourceId: String;
    status: String;
    releaseDate: Date|undefined = undefined;
    averageNote: Number;
    genres: Array<Genre> = [];

    constructor(data: any) {
        this.id = data.id;
        this.title = data.title;
        this.description = data.description;
        this.category = data.category;
        this.updated = data.updated;
        this.source = data.source;
        this.sourceId = data.sourceId;
        this.status = data.status;
        if(data.releaseDate !== null){
            this.releaseDate = new Date(data.releaseDate);
        }
        this.averageNote = data.averageNote;
        data.genres.forEach((g:Object) => {
            this.genres.push(new Genre(g));
        });
        this.poster = this.toFullURL(data.poster);
        this.backdrop = this.toFullURL(data.backdrop);
    }

    toFullURL(url: String|null){
        if(url === null || url.trim() === ""){
            return null;
        }
        switch(this.source){
            case "themoviedb":
                return "https://image.tmdb.org/t/p/original" + url;
            case "thetvdb":
                return "https://www.thetvdb.com/banners/" + url;
        }
        return null;
    }
}
