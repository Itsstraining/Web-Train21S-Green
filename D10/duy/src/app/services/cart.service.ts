import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { cartItem } from '../models/cartitem.model';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  private sps: cartItem[] = [];
  public add(item: Item) {
    for (let i = 0; i < this.sps.length; i++) {
      if (this.sps[i].item.id == item.id) {
        this.sps[i].quantity++;
        return;
      }
    }
    this.sps.push(new cartItem(item, 1));
  }

  public getQuantityByItem(item: Item): number {
    let r = this.sps.find((p) => p.item.id == item.id);
    return r == undefined ? 0 : r.quantity;
  }
}
