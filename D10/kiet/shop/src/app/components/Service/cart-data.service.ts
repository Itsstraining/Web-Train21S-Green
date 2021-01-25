import { Injectable } from '@angular/core';
import { Item } from '../model/item.model';

@Injectable({
  providedIn: 'root'
})
export class CartDataService {

  constructor() { }
  itemList: Array<Item> =[
    {
      id:"item 001",
      name:"Áo thun",
      price:350000,
      pictureUrl:"https://salt.tikicdn.com/cache/w1200/ts/product/4e/b2/d1/246cc84d846e404002c58d743327a603.png"
    },
    {
      id:"item 002",
      name:"Quần Jean",
      price:150000,
      pictureUrl:"https://zizastore.com/image/cache/data/quan-jeans-nam/jd10-quan-jean-nam-gap-xuat-du-xin-1284-700x700.jpg"
    },
    {
      id:"item 003",
      name:"Áo hoodie",
      price:450000,
      pictureUrl:"https://i.pinimg.com/originals/8f/1b/1b/8f1b1b15d2f13df9c7233f8f521fdf94.jpg"
    },
    {
      id:"item 004",
      name:"Áo sơ mi",
      price:250000,
      pictureUrl:"https://efora.vn/wp-content/uploads/2019/11/8N1C751V04ZF917_04-1.jpg"
    },
  ]
  public addItem(item:Item){
    this.itemList.push(item);
  }
  public deleteItem(pos:number){
    this.itemList = this.itemList.slice(pos,1);
  }

}


