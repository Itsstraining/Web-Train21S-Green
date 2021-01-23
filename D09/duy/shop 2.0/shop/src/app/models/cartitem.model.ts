import { Item } from '../models/item.model';

export class cartItem {
  public item: Item;
  public quantity: number;

  constructor(Item: Item, quantity: number) {
    this.item = Item;
    this.quantity = quantity;
  }
}
