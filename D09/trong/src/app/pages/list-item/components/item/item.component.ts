import { Component, Input, OnInit } from '@angular/core';
import { DataseviceService } from 'src/app/sevices/datasevice.service';
import { Item } from '../../../../../app/pages/models/Pizza.model';
import {CartseviceService} from '../../../../sevices/cartsevice.service'
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  constructor(public datasevice:DataseviceService) { }

  ngOnInit(): void {
  }
  @Input()
  public item:Item;

  public count = 0;

  public onClickAdd() {
    this.datasevice.addItem(this.item);
  }
}

