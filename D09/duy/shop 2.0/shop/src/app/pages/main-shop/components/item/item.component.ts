import { Component, Input, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { CartServiceService } from 'src/app/services/cart-service';
import { ItemDataService } from 'src/app/services/item-data.service';
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

  constructor(public item: CartServiceService) {}

  ngOnInit(): void {}
  public onClickAdd() {
    this.item.add(this.item);
    this.quantity = this.item.getQuantityByItem(this.item);
  }
}
