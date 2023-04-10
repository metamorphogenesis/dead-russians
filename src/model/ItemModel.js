export class ItemModel {
    id = 0;
    title = '';
    total = 0;
    increase = 0;
    picture= '';

    constructor(id, title, total, increase, picture) {
        this.id = id;
        this.title = title;
        this.total = total;
        this.increase = increase;
        this.picture = picture;
    }
}