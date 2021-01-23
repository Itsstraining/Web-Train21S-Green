import { Component, OnInit } from '@angular/core';
import { ItemDataService } from 'src/app/services/item-data.service';

@Component({
  selector: 'app-itemlist',
  templateUrl: './itemlist.component.html',
  styleUrls: ['./itemlist.component.scss'],
})
export class ItemlistComponent implements OnInit {
  constructor(public itemlist: ItemDataService) {}

  ngOnInit(): void {}
}
