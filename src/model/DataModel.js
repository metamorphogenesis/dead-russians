export class DataModel {
    date = null;
    day = 0;
    status = '';
    items = [];

    constructor(date, day, status, items) {
        this.date = date;
        this.day = day;
        this.status = status;
        this.items = items;
    }
}