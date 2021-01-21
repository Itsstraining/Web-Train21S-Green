import { Component, OnInit } from '@angular/core';
import { DataseviceService } from 'src/app/sevices/datasevice.service';
import { Item } from '../../../..//pages/models/Pizza.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(public itemData:DataseviceService) { }

  ngOnInit(): void {
    this.listItem=this.itemData.listItem;
  }
  public listItem:Array<Item> = [
  ]
}
