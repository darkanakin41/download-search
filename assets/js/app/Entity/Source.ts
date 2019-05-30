export default class Source {
    id: number;
    title: String;
    baseUrl: String;

    constructor(data: any) {
        this.id = data.id;
        this.title = data.title;
        this.baseUrl = data.baseUrl;
    }
}
