import { Injectable } from '@angular/core';
import { cart } from '../pages/models/itemcart.model';
import { Item } from '../pages/models/Pizza.model';

@Injectable({
  providedIn: 'root'
})
export class CartseviceService {
  public list:cart[]=[];
  public add(pizza: Item) {
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i].Item.id == pizza.id) {
        return;
      }
    }
    this.list.push(new cart(pizza, 1));
  }
  public remove(pizza: Item) {
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i].Item.id == pizza.id) {
        if (this.list[i].quantity == 1) {
          this.list = this.list.splice(i, 1);
          return;
        }
      }
    }
  }
  constructor() { }
  public getQuantityByPizza(item: Item): number {
    let r = this.list.find((p) => p.Item.id == item.id);
    return r == undefined ? 0 : r.quantity;
  }
}
