import { Component, OnInit } from '@angular/core';
import { item } from 'src/app/model/item.model';

@Component({
  selector: 'app-itemlist',
  templateUrl: './itemlist.component.html',
  styleUrls: ['./itemlist.component.scss']
})
export class ItemlistComponent implements OnInit {

  constructor() { }
  itemlist:Array<item>=[
    {
      id:"0001",
      name:"san pham 1",
      Price: 10000,
      discount: 50,
      outOfstock: false,
      imgurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgolBdeaXdt7hZ4G28YiA8shOCg4jkBg08uA&usqp=CAU"
    
    },
    {
      id:"0002",
      name:"san pham 2",
      Price: 100100,
      discount: 20,
      outOfstock: true,
      imgurl:"https://img.vn/uploads/thuvien/viber-image-2019-08-06-10-40-38-jpg-20190807145944LO3qbinQdG.jpg"
    },
    {
      id:"0003",
      name:"san pham 3",
      Price: 120000,
      discount: 20,
      outOfstock: false,
      imgurl:"https://img.vn/uploads/thuvien/viber-image-2019-08-06-10-40-38-jpg-20190807145944LO3qbinQdG.jpg"
    },

  ];
  
  

  ngOnInit(): void {
  }

}
