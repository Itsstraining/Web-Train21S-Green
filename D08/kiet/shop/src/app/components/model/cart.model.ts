import { ItemComponent } from "../item-list/item/item.component";
import { CartService } from "../Service/cart.service";
import { Item } from "./item.model";

export class Cart{
    public item:Item;
    public quantity:number;
    public get total(){
        return this.item.price * this.quantity;
    };
    constructor (item:Item, quannity:number){
        this.item = item;
        this.quantity = quannity;
    }
}
