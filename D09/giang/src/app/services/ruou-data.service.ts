import { Injectable } from '@angular/core';
import { Ruou } from '../model/ruou.model';

@Injectable({
  providedIn: 'root'
})
export class RuouDataService {
  constructor() { }
   public listRuou=[
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
  name: "Rượu Mè đen",
  price: 100,
  instock: true,
  imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Masseto.jpg/300px-Masseto.jpg",
},
{
  id: "ruou004",
  name: "Rượu Chuối Hột",
  price: 100,
  instock: false,
  imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Masseto.jpg/300px-Masseto.jpg",
},
{
  id: "ruou005",
  name: "Rượu gạo",
  price: 100,
  instock: true,
  imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Masseto.jpg/300px-Masseto.jpg",
},
{
  id: "ruou006",
  name: "Rượu nho ",
  price: 100,
  instock: true,
  imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Masseto.jpg/300px-Masseto.jpg",
}]
  public temp = [];
  public addToCart(ruou:Ruou){

  }
}
  

  

