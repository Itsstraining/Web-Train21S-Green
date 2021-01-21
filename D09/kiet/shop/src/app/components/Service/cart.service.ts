import { Injectable } from '@angular/core';
import { Cart } from '../model/cart.model';
import { Item } from '../model/item.model';
import { CartDataService } from './cart-data.service';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  constructor() { }

  private items: Cart[] = [];

  public add(item: Item) {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].item.id == item.id) {
        this.items[i].quantity++;
        return;
      }
    }
    this.items.push(new Cart(item, 1));
  }

  public remove(item: Item) {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].item.id == item.id) {
        if (this.items[i].quantity == 1) {
          this.items = this.items.splice(i, 1);
          return;
        }
        this.items[i].quantity--;
        return;
      }
    }
  }

  public removeAllOfAnItem(item: Item) {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].item.id == item.id) {
        this.items = this.items.splice(i, 1);
        return;
      }
    }
  }

  public clear() {
    this.items.length = 0;
  }

  // public get grandTotal(): number {
  //   let total = 0;
  //   for (let i = 0; i < this.items.length; i++) {
  //     total += this.items[i].totalPrice;
  //   }
  //   return total;
  // }

  public get cartItems(): Cart[] {
    return this.items;
  }

  public getQuantityByItem(item: Item): number {
    let r = this.items.find((p) => p.item.id == item.id);
    return r == undefined ? 0 : r.quantity;
  }

}
