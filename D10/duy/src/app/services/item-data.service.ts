import { Injectable } from '@angular/core';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root',
})
export class ItemDataService {
  itemData: Array<Item> = [
    {
      id: '1',
      imageUrl:
        'https://product.hstatic.net/1000096703/product/quan-kaki_3b2d61b5ebd24464b4995616b1231c71_master.jpg',
      name: 'Quần 1',
      price: 20,
      inStock: true,
    },
    {
      id: '2',
      imageUrl:
        'https://product.hstatic.net/1000096703/product/quan-kaki_3b2d61b5ebd24464b4995616b1231c71_master.jpg',
      name: 'Quần 2',
      price: 20,
      inStock: true,
    },
    {
      id: '3',
      imageUrl:
        'https://product.hstatic.net/1000096703/product/quan-kaki_3b2d61b5ebd24464b4995616b1231c71_master.jpg',
      name: 'Quần 3',
      price: 20,
      inStock: true,
    },
    {
      id: '4',
      imageUrl:
        'https://product.hstatic.net/1000096703/product/quan-kaki_3b2d61b5ebd24464b4995616b1231c71_master.jpg',
      name: 'Quần 4',
      price: 20,
      inStock: true,
    },
    {
      id: '5',
      imageUrl:
        'https://product.hstatic.net/1000096703/product/quan-kaki_3b2d61b5ebd24464b4995616b1231c71_master.jpg',
      name: 'Quần 5',
      price: 20,
      inStock: true,
    },
    {
      id: '6',
      imageUrl:
        'https://product.hstatic.net/1000096703/product/quan-kaki_3b2d61b5ebd24464b4995616b1231c71_master.jpg',
      name: 'Quần 6',
      price: 20,
      inStock: true,
    },
    {
      id: '7',
      imageUrl:
        'https://product.hstatic.net/1000096703/product/quan-kaki_3b2d61b5ebd24464b4995616b1231c71_master.jpg',
      name: 'Quần 7',
      price: 20,
      inStock: true,
    },
    {
      id: '8',
      imageUrl:
        'https://product.hstatic.net/1000096703/product/quan-kaki_3b2d61b5ebd24464b4995616b1231c71_master.jpg',
      name: 'Quần 8',
      price: 20,
      inStock: true,
    },
    {
      id: '9',
      imageUrl:
        'https://product.hstatic.net/1000096703/product/quan-kaki_3b2d61b5ebd24464b4995616b1231c71_master.jpg',
      name: 'Quần 9',
      price: 20,
      inStock: true,
    },
    {
      id: '10',
      imageUrl:
        'https://product.hstatic.net/1000096703/product/quan-kaki_3b2d61b5ebd24464b4995616b1231c71_master.jpg',
      name: 'Quần 10',
      price: 20,
      inStock: true,
    },
  ];

  constructor() {}
}
