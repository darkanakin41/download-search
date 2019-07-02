export default abstract class Notification {
    id: number;
    action: String;
    date: Date;
    readed: Boolean;

    protected constructor(data: any) {
        this.id = data.id;
        this.action = data.action;
        this.date = new Date(data.date);
        this.readed = data.readed;
    }

    abstract getTitle():string;
    abstract getMessage():string;
    abstract getRouteName():string;
    abstract getRouteParams():any;
    abstract getClasses():any;
    abstract getIcon():any;
}
