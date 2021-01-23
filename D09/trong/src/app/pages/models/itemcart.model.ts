import {Item} from "./Pizza.model";

export class cart{
  public quantity:number;
  public Item:Item;

  constructor(item: Item, quantity: number) {
    this.Item = item;
    this.quantity = quantity;
  }
}

