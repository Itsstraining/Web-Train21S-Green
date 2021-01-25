import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import { ShopItem } from '../models/shop-item.model';
@Injectable({
  providedIn: 'root'
})
export class ShopItemService {

  constructor(private db: AngularFirestore) { }

public createShopItem(item:ShopItem){
  try{
    this.db.collection("items").doc(item.name).set(item);
  alert('Item [$(item.name)]');
  }
  catch(err) {
    alert('Item [$(item.name)]');
  }
}
}
