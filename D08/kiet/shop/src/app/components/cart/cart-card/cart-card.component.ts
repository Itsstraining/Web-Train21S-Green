import { Component, Input, OnInit } from '@angular/core';
import { Cart } from '../../model/cart.model';
import { CartService } from '../../Service/cart.service';

@Component({
  selector: 'app-cart-card',
  templateUrl: './cart-card.component.html',
  styleUrls: ['./cart-card.component.scss']
})
export class CartCardComponent implements OnInit {

  constructor(public cart:CartService) { }
  @Input()
  public cartItem:Cart
  public quantity:number = 0;
  ngOnInit(): void {
  }
  public increase(){

    this.cart.add(this.cartItem.item);
    this.quantity = this.cart.getQuantityByItem(this.cartItem.item);
    

  }
  public removeOnClick(){
    this.cart.remove(this.cartItem.item);
    this.quantity = this.cart.getQuantityByItem(this.cartItem.item);
  }

}
