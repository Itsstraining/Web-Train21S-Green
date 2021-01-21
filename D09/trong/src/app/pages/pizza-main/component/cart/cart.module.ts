import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CartRoutingModule} from '../cart/cart-routing.module';
import { ListcartComponent } from './listcart/listcart.component'
@NgModule({
  declarations: [ListcartComponent],
  imports: [
    CommonModule,
    CartRoutingModule
  ]
})
export class CartModule { }
