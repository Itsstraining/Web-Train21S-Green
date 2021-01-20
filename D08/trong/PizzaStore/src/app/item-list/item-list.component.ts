import { Item } from '../models/Pizza.model';
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
      id:"Pizza 1",
      name:"san pham 1",
      price:100,
      outofStock:false,
      Itemurl:"https://dominos.vn/Data/Sites/1/Product/593/cheese-chicken-bacon.png",
    },{
      id:"Pizza 2",
      name:"san pham 2",
      price:500,
      outofStock:true,
      Itemurl:"https://dominos.vn/Data/Sites/1/Product/593/cheese-chicken-bacon.png",
    },
    {
      id:"Pizza 3",
      name:"san pham 3",
      price:321,
      outofStock:true,
      Itemurl:"https://dominos.vn/Data/Sites/1/Product/593/cheese-chicken-bacon.png",
    },
    {
      id:"Pizza 4",
      name:"san pham 4",
      price:321,
      outofStock:true,
      Itemurl:"https://dominos.vn/Data/Sites/1/Product/593/cheese-chicken-bacon.png",
    },
    {
      id:"Pizza 5",
      name:"san pham 5",
      price:553,
      outofStock:true,
      Itemurl:"https://dominos.vn/Data/Sites/1/Product/593/cheese-chicken-bacon.png",
    },
    {
      id:"Pizza 6",
      name:"san pham 6",
      price:553,
      outofStock:true,
      Itemurl:"https://dominos.vn/Data/Sites/1/Product/593/cheese-chicken-bacon.png",
    },
    {
      id:"Pizza 7",
      name:"san pham 7",
      price:553,
      outofStock:true,
      Itemurl:"https://dominos.vn/Data/Sites/1/Product/593/cheese-chicken-bacon.png",
    },
    {
      id:"Pizza 8",
      name:"san pham 8",
      price:553,
      outofStock:true,
      Itemurl:"https://dominos.vn/Data/Sites/1/Product/593/cheese-chicken-bacon.png",
    },
    {
      id:"Pizza 9",
      name:"san pham 9",
      price:553,
      outofStock:true,
      Itemurl:"https://dominos.vn/Data/Sites/1/Product/593/cheese-chicken-bacon.png",
    },
    {
      id:"Pizza 10",
      name:"san pham 10",
      price:553,
      outofStock:true,
      Itemurl:"https://dominos.vn/Data/Sites/1/Product/593/cheese-chicken-bacon.png",
    },
    {
      id:"Pizza 11",
      name:"san pham 11",
      price:553,
      outofStock:true,
      Itemurl:"https://dominos.vn/Data/Sites/1/Product/593/cheese-chicken-bacon.png",
    },
    {
      id:"Pizza 12",
      name:"san pham 12",
      price:553,
      outofStock:true,
      Itemurl:"https://dominos.vn/Data/Sites/1/Product/593/cheese-chicken-bacon.png",
    },]

}
