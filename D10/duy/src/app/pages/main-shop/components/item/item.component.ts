import { Component, Input, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { CartService } from '../../../../services/cart.service';
import { ItemDataService } from '../../../../services/item-data.service';
import { Item } from '../../../../models/item.model';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input()
  public item: Item;
  public quantity: number = 0;

  constructor(public cart: CartService) {}

  ngOnInit(): void {}
  public onClickAdd() {
    this.cart.add(this.item);
    this.quantity = this.cart.getQuantityByItem(this.item);
  }
}
