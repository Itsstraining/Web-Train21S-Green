import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../../model/item.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  public count = 1

  constructor() { }
  
  @Input()
  item:Item;
  
  

  ngOnInit(): void {
  }
  public increase(){

    this.count += 1;
  }

  public decrease(){
    this.count -= this.count == 1?0:1;
  }

}
