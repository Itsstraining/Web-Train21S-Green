import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PizzaMainRoutingModule } from './pizza-main-routing.module';
import { PizzaMainComponent } from './pizza-main.component';
import { NavComponent } from './nav/nav.component';


@NgModule({
  declarations: [PizzaMainComponent, NavComponent],
  imports: [
    CommonModule,
    PizzaMainRoutingModule
  ]
})
export class PizzaMainModule { }
