export default class Genre {
    id: number;
    title: String;

    constructor(data: any) {
        this.id = data.id;
        this.title = data.title;
    }
}
