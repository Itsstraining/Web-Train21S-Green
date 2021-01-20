import { ItemComponent } from "../item-list/item/item.component";
import { CartService } from "../Service/cart.service";
import { Item } from "./item.model";

export class Cart{
    item:Item;
    quantity:number;
    total:number;
    constructor (item:Item, quannity:number){
        this.item = item;
        this.quantity = quannity;
    }
}
