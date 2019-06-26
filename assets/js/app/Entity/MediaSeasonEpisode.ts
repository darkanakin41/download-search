import MediaSeason from "./MediaSeason";

export default class MediaSeasonEpisode {
    id: number;

    title: String;
    description: String;
    poster: String|null;
    updated: String;
    theMovieDbId: String;

    number: Number;
    averageNote: Number;

    releaseDate: Date|undefined = undefined;
    season:MediaSeason;

    constructor(data: any) {
        this.id = data.id;
        this.title = data.title;
        this.description = data.description;
        this.number = data.number;
        this.updated = data.updated;
        this.theMovieDbId = data.theMovieDbId;
        if(data.releaseDate !== null){
            this.releaseDate = new Date(data.releaseDate);
        }
        this.averageNote = data.averageNote;
        this.season = new MediaSeason(data.season);
        this.poster = this.season.media.toFullURL(data.poster);
    }
}
