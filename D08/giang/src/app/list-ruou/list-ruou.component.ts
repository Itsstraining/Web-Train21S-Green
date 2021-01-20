import { Component, OnInit } from '@angular/core';
import { Ruou } from '../model/ruou.model';

@Component({
  selector: 'app-list-ruou',
  templateUrl: './list-ruou.component.html',
  styleUrls: ['./list-ruou.component.scss']
})
export class ListRuouComponent implements OnInit {

  constructor() { }
  listRuou: Array <Ruou> = [
    {
      id: "ruou001",
      name: "rượu vang",
      price: 100,
      instock: true,
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Masseto.jpg/300px-Masseto.jpg",
  },
  {
    id: "ruou002",
    name: "Rượu Napoleon",
    price: 100,
    instock: true,
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Masseto.jpg/300px-Masseto.jpg",
},
{
  id: "ruou003",
  name: "ruou vang",
  price: 100,
  instock: true,
  imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Masseto.jpg/300px-Masseto.jpg",
},
{
  id: "ruou003",
  name: "ruou vang",
  price: 100,
  instock: false,
  imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Masseto.jpg/300px-Masseto.jpg",
},
{
  id: "ruou003",
  name: "ruou vang",
  price: 100,
  instock: true,
  imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Masseto.jpg/300px-Masseto.jpg",
},
{
  id: "ruou003",
  name: "ruou vang",
  price: 100,
  instock: true,
  imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Masseto.jpg/300px-Masseto.jpg",
}
  ]
  ngOnInit(): void {
  }

}
