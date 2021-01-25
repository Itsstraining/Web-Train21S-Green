import { Injectable } from '@angular/core';
import { dbItem } from '../models/dbItem.model';

@Injectable({
  providedIn: 'root',
})
export class DbDataService {
  constructor(private item: dbItem) {}

  public createShopItem(item: dbItem) {
    // this.db.collection
  }
}
