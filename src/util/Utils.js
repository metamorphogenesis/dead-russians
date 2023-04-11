import { ItemTitle, ItemId } from "./ItemConstants";
import { ItemModel } from '../model/ItemModel';
import { DataModel } from '../model/DataModel';

export function parseToDataModel(data) {
    const DATE = new Date(data.date);
    const DAY = data.day;
    const STATUS = data.status;
    const ITEMS = [];

    for (const [key, value] of Object.entries(ItemTitle)) {
        const ITEM = new ItemModel(ItemId[key], value, data.stats[key], data.increase[key], `/images/${key}.svg`);
        ITEMS.push(ITEM);
    }

    return new DataModel(DATE, DAY, STATUS, ITEMS);
}

export function getCorrectForm(days) {
    const SIGN_BEFORE_LAST = Math.floor(days % 100 / 10);

    if (SIGN_BEFORE_LAST === 1) {
        return 'дней';
    }

    const LAST_SIGN = days % 10;

    switch (LAST_SIGN) {
        case 1: return 'день';
        case 2:
        case 3:
        case 4: return 'дня';
        default: return 'дней';
    }
}