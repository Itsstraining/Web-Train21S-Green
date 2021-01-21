import { Injectable } from '@angular/core';
import { cart } from '../pages/models/itemcart.model';

@Injectable({
  providedIn: 'root'
})
export class CartseviceService {
  public list:cart[]=[];
  constructor() { }
}
