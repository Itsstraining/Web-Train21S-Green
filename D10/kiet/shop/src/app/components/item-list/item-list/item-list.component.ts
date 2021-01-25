import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {ItemComponent} from '../item/item.component'
import { Item } from '../../model/item.model';
import { CartDataService } from '../../Service/cart-data.service';
@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  constructor(public cartData:CartDataService) { }

  itemList: Array<Item> =[];
  ngOnInit(): void {
    this.itemList = this.cartData.itemList;
  }

}

