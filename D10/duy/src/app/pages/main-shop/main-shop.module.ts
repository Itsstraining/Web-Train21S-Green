import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainShopRoutingModule } from './main-shop-routing.module';
import { MainShopComponent } from './main-shop.component';
import { ItemComponent } from './components/item/item.component';
import { ItemlistComponent } from './components/itemlist/itemlist.component';


@NgModule({
  declarations: [MainShopComponent, ItemComponent, ItemlistComponent],
  imports: [
    CommonModule,
    MainShopRoutingModule
  ]
})
export class MainShopModule { }
