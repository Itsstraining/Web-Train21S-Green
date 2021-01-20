import { Injectable } from '@angular/core';
import { Cart } from '../model/cart.model';
import { Item } from '../model/item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private item:Item) { }
  cartList:Array<Cart> = [];
  
  
  public add(item:Item){
    for (let index = 0; index < this.cartList.length; index++) {
      if(this.cartList[index].item.id == item.id){
        this.cartList[index].quantity++;
        return;
      }
      
    }
    this.cartList.push(new Cart(item,1))
  }
}
