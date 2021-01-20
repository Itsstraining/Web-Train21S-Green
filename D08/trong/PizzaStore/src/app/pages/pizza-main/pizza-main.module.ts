import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PizzaMainRoutingModule } from './pizza-main-routing.module';
import { PizzaMainComponent } from './pizza-main.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';



@NgModule({
  declarations: [PizzaMainComponent,],
  imports: [
    CommonModule,
    PizzaMainRoutingModule
  ]
})
export class PizzaMainModule { }
