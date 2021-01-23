import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../../model/item.model';
import { CartService } from '../../Service/cart.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  public count = 1

  constructor(public cart:CartService) { }
  
  @Input()
  item:Item;
  
  public quantity:number = 1;
  

  ngOnInit(): void {
    this.quantity = this.cart.getQuantityByItem(this.item);
  }
  public addOnClick(){

    this.cart.add(this.item);
    this.quantity = this.cart.getQuantityByItem(this.item);
    

  }

}
