import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/pages/models/Pizza.model';
import { DataseviceService } from 'src/app/sevices/datasevice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private datacart:DataseviceService) { }

  public list: Array<Item>
  ngOnInit(): void {
    this.list= this.datacart.temb;
  }

}
