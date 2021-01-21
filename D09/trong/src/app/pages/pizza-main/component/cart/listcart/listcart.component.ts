import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/pages/models/Pizza.model';
import { CartseviceService } from 'src/app/sevices/cartsevice.service';
import { DataseviceService } from 'src/app/sevices/datasevice.service';

@Component({
  selector: 'app-listcart',
  templateUrl: './listcart.component.html',
  styleUrls: ['./listcart.component.scss']
})
export class ListcartComponent implements OnInit {

  constructor(private cart:CartseviceService) { }
  public listItem=[];
  ngOnInit(): void {

  }

}
