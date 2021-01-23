import { Injectable } from '@angular/core';
import { cartItem } from '../models/cartitem.model';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root',
})
export class CartServiceService {
  items = cartItem[] =[];

  public add(item:Item) {
        for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].item.name == item.name) {
        this.items[i].quantity++;
        return;
      }
      this.items.push(new cartItem(item,1));
    }
  }

  public getQuantityByItem(item:Item):number{
 let r = this.items.find((p)=>p.item.id == item.id)
 return r ==undefined?0:r.quantity
  }

  public get cartitem():cartItem[]{
    return this.items

  }
  constructor() {}
}
