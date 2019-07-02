import Genre from "./Genre";

export default class Media {
    id: number;
    title: string;
    description: string;
    category: string;
    poster: string|null;
    backdrop: string|null;
    updated: string;
    source: string;
    sourceId: string;
    status: string;
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

    toFullURL(url: string|null){
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
