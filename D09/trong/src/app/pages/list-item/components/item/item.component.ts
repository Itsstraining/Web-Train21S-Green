import { Component, Input, OnInit } from '@angular/core';
import { DataseviceService } from 'src/app/sevices/datasevice.service';
import { Item } from '../../../../../app/pages/models/Pizza.model';

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
  public tru(){
    this.count--;
  }
  public cong(){
    this.count++;
  }


  public addtocart(item:Item){
    this.datasevice.addtocart(this.item);

    let length = this.datasevice.temb.length;
    console.log(this.datasevice.temb[length-1]);
  }
}

