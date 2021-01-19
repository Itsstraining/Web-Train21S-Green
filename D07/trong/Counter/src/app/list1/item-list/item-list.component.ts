import { Item } from './../../model/item.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public listItem:Array<Item> = [
    {
      name:"san pham 1",
      price:100,
      outofStock:false,
      Itemurl:"https://dominos.vn/Data/Sites/1/Product/593/cheese-chicken-bacon.png",
    },{
      name:"san pham 2",
      price:500,
      outofStock:true,
      Itemurl:"https://dominos.vn/Data/Sites/1/Product/593/cheese-chicken-bacon.png",
    },
    {
      name:"san pham 3",
      price:321,
      outofStock:true,
      Itemurl:"https://dominos.vn/Data/Sites/1/Product/593/cheese-chicken-bacon.png",
    },
    {
      name:"san pham 4",
      price:321,
      outofStock:true,
      Itemurl:"https://dominos.vn/Data/Sites/1/Product/593/cheese-chicken-bacon.png",
    },
    {
      name:"san pham 5",
      price:553,
      outofStock:true,
      Itemurl:"https://dominos.vn/Data/Sites/1/Product/593/cheese-chicken-bacon.png",
    },
    {
      name:"san pham 6",
      price:553,
      outofStock:true,
      Itemurl:"https://dominos.vn/Data/Sites/1/Product/593/cheese-chicken-bacon.png",
    },
    {
      name:"san pham 7",
      price:553,
      outofStock:true,
      Itemurl:"https://dominos.vn/Data/Sites/1/Product/593/cheese-chicken-bacon.png",
    },
    {
      name:"san pham 8",
      price:553,
      outofStock:true,
      Itemurl:"https://dominos.vn/Data/Sites/1/Product/593/cheese-chicken-bacon.png",
    },
    {
      name:"san pham 9",
      price:553,
      outofStock:true,
      Itemurl:"https://dominos.vn/Data/Sites/1/Product/593/cheese-chicken-bacon.png",
    },
    {
      name:"san pham 10",
      price:553,
      outofStock:true,
      Itemurl:"https://dominos.vn/Data/Sites/1/Product/593/cheese-chicken-bacon.png",
    },
    {
      name:"san pham 11",
      price:553,
      outofStock:true,
      Itemurl:"https://dominos.vn/Data/Sites/1/Product/593/cheese-chicken-bacon.png",
    },
    {
      name:"san pham 12",
      price:553,
      outofStock:true,
      Itemurl:"https://dominos.vn/Data/Sites/1/Product/593/cheese-chicken-bacon.png",
    },]

}
