import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {ItemComponent} from '../../../components/item-list/item/item.component'
import { Item } from '../../model/item.model';
@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  constructor() { }

  itemList:Array<Item>=[
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
    {
      id:"item 005",
      name:"Áo thun",
      price:350000,
      pictureUrl:"https://salt.tikicdn.com/cache/w1200/ts/product/4e/b2/d1/246cc84d846e404002c58d743327a603.png"
    },
    {
      id:"item 006",
      name:"Quần Jean",
      price:150000,
      pictureUrl:"https://zizastore.com/image/cache/data/quan-jeans-nam/jd10-quan-jean-nam-gap-xuat-du-xin-1284-700x700.jpg"
    },
    {
      id:"item 007",
      name:"Áo hoodie",
      price:450000,
      pictureUrl:"https://i.pinimg.com/originals/8f/1b/1b/8f1b1b15d2f13df9c7233f8f521fdf94.jpg"
    },
    {
      id:"item 008",
      name:"Áo sơ mi",
      price:250000,
      pictureUrl:"https://efora.vn/wp-content/uploads/2019/11/8N1C751V04ZF917_04-1.jpg"
    },
    {
      id:"item 009",
      name:"Áo thun",
      price:350000,
      pictureUrl:"https://salt.tikicdn.com/cache/w1200/ts/product/4e/b2/d1/246cc84d846e404002c58d743327a603.png"
    },
    {
      id:"item 010",
      name:"Quần Jean",
      price:150000,
      pictureUrl:"https://zizastore.com/image/cache/data/quan-jeans-nam/jd10-quan-jean-nam-gap-xuat-du-xin-1284-700x700.jpg"
    },
    {
      id:"item 011",
      name:"Áo hoodie",
      price:450000,
      pictureUrl:"https://i.pinimg.com/originals/8f/1b/1b/8f1b1b15d2f13df9c7233f8f521fdf94.jpg"
    },
    {
      id:"item 012",
      name:"Áo sơ mi",
      price:250000,
      pictureUrl:"https://efora.vn/wp-content/uploads/2019/11/8N1C751V04ZF917_04-1.jpg"
    }
  ]
  ngOnInit(): void {
  }

}

