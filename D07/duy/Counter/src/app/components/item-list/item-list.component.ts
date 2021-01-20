import { Component, OnInit } from '@angular/core';
import { Item } from '../model/item.model';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  constructor() { }
itemList:Array<Item> =[{
  id:"https://product.hstatic.net/1000096703/product/quan-kaki_3b2d61b5ebd24464b4995616b1231c71_master.jpg",
  name:"Quần Kaki",
  price:18,
  discount:0.5,
  outOfstock:true
},{
    id:"https://product.hstatic.net/1000096703/product/1_c9adb65daf4d4fd8a770cdfe61d18c9a_master.jpg",
  name:"Quần Jogger",
  price:20,
  discount:0.5,
  outOfstock:false
},{
    id:"https://product.hstatic.net/1000096703/product/1_07861fcb2d7748f99a8ed9fa392afd29_master.jpg",
  name:"Quần short",
  price:20,
  discount:0.5,
  outOfstock:false
},{
    id:"https://product.hstatic.net/1000096703/product/1_07861fcb2d7748f99a8ed9fa392afd29_master.jpg",
  name:"Quần short",
  price:20,
  discount:0.5,
  outOfstock:false
},{
    id:"https://product.hstatic.net/1000096703/product/1_07861fcb2d7748f99a8ed9fa392afd29_master.jpg",
  name:"Quần short",
  price:20,
  discount:0.5,
  outOfstock:false
},{
    id:"https://product.hstatic.net/1000096703/product/1_07861fcb2d7748f99a8ed9fa392afd29_master.jpg",
  name:"Quần short",
  price:20,
  discount:0.5,
  outOfstock:false
},{
    id:"https://product.hstatic.net/1000096703/product/1_07861fcb2d7748f99a8ed9fa392afd29_master.jpg",
  name:"Quần short",
  price:20,
  discount:0.5,
  outOfstock:false
},{
    id:"https://product.hstatic.net/1000096703/product/1_07861fcb2d7748f99a8ed9fa392afd29_master.jpg",
  name:"Quần short",
  price:20,
  discount:0.5,
  outOfstock:false
},{
    id:"https://product.hstatic.net/1000096703/product/1_07861fcb2d7748f99a8ed9fa392afd29_master.jpg",
  name:"Quần short",
  price:20,
  discount:0.5,
  outOfstock:false
},{
    id:"https://product.hstatic.net/1000096703/product/1_07861fcb2d7748f99a8ed9fa392afd29_master.jpg",
  name:"Quần short",
  price:20,
  discount:0.5,
  outOfstock:false
}
]
  

  

  ngOnInit(): void {
  }

}
