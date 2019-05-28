import Source from "./Source";

export default class Item {
    id:number;
    title:String;
    quality:String;
    genres:Array<String>;
    lastPart:String;
    fullUrl:String;
    source:Source;
    constructor(data:any){
        this.id = data.id;
        this.title = data.title;
        this.quality = data.quality;
        this.genres = data.genres;
        this.lastPart = data.lastPart;
        this.fullUrl = data.fullUrl;
        this.source = new Source(data.source);
    }
}
