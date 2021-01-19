import { Component, Input, OnInit, } from '@angular/core';
import { item } from 'src/app/model/item.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  constructor() { }
@Input()
public item :item;
  ngOnInit(): void {
  }

}
