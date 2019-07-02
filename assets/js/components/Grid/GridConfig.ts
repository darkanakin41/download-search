export default class GridSetting {
    component: Function;
    itemsPerRowForced: Number | undefined;
    nbRowsForced: Number | undefined;
    pagination: Boolean = true;
    onclick: Function | undefined;
    to: Function | undefined;

    constructor(data: any) {
        this.component = data.component;
        this.itemsPerRowForced = data.itemsPerRowForced;
        this.nbRowsForced = data.nbRowsForced;
        this.pagination = data.pagination || true;
        this.onclick = data.onclick;
        this.to = data.to;
    }
}
