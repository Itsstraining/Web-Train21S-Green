import { Item } from '../../model/item.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  constructor() {}
  @Input()
  public item:any;

  ngOnInit(): void {}
}
