import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { CartCardComponent } from './cart-card/cart-card.component';


@NgModule({
  declarations: [CartComponent, CartCardComponent],
  imports: [
    CommonModule,
    CartRoutingModule
  ]
})
export class CartModule { }
