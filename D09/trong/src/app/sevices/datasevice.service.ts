import { Injectable } from '@angular/core';
import { Item } from '../pages/models/Pizza.model';

@Injectable({
  providedIn: 'root'
})
export class DataseviceService {

  constructor() { }
  public listItem:Array<Item> = [
    {
      id:"Pi1",
      name:"Pizza Vui Ve",
      price:100,
      outofStock:false,
      Itemurl:"https://dominos.vn/Data/Sites/1/Product/593/cheese-chicken-bacon.png",
    },{
      id:"Pi2",
      name:"san pham 2",
      price:500,
      outofStock:true,
      Itemurl:"https://dominos.vn/Data/Sites/1/Product/593/cheese-chicken-bacon.png",
    },
    {
      id:"Pi3",
      name:"san pham 3",
      price:321,
      outofStock:true,
      Itemurl:"https://dominos.vn/Data/Sites/1/Product/593/cheese-chicken-bacon.png",
    },
    {
      id:"Pi4",
      name:"san pham 4",
      price:321,
      outofStock:true,
      Itemurl:"https://dominos.vn/Data/Sites/1/Product/593/cheese-chicken-bacon.png",
    },
    {
      id:"Pi5",
      name:"san pham 5",
      price:553,
      outofStock:true,
      Itemurl:"https://dominos.vn/Data/Sites/1/Product/593/cheese-chicken-bacon.png",
    },
    {
      id:"Pi6",
      name:"san pham 6",
      price:553,
      outofStock:true,
      Itemurl:"https://dominos.vn/Data/Sites/1/Product/593/cheese-chicken-bacon.png",
    },
    {
      id:"Pi7",
      name:"san pham 7",
      price:553,
      outofStock:true,
      Itemurl:"https://dominos.vn/Data/Sites/1/Product/593/cheese-chicken-bacon.png",
    },
    {
      id:"Pi8",
      name:"san pham 8",
      price:553,
      outofStock:true,
      Itemurl:"https://dominos.vn/Data/Sites/1/Product/593/cheese-chicken-bacon.png",
    },
    {
      id:"Pi9",
      name:"san pham 9",
      price:553,
      outofStock:true,
      Itemurl:"https://dominos.vn/Data/Sites/1/Product/593/cheese-chicken-bacon.png",
    },
    {
      id:"Pi10",
      name:"san pham 10",
      price:553,
      outofStock:true,
      Itemurl:"https://dominos.vn/Data/Sites/1/Product/593/cheese-chicken-bacon.png",
    },
    {
      id:"Pi11",
      name:"san pham 11",
      price:553,
      outofStock:true,
      Itemurl:"https://dominos.vn/Data/Sites/1/Product/593/cheese-chicken-bacon.png",
    },
    {
      id:"Pi12",
      name:"san pham 12",
      price:553,
      outofStock:true,
      Itemurl:"https://dominos.vn/Data/Sites/1/Product/593/cheese-chicken-bacon.png",
    },]
    public temb = [];
    public addtocart(item:Item){
      this.temb.push(item);
    }
}
