import { Component, Input, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Item } from 'src/app/models/item.model';
import { cartItem } from '../../../../models/cartitem.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent implements OnInit {
  constructor() {}
  @Input()
  cartitem: cartItem;

  ngOnInit(): void {}
}
