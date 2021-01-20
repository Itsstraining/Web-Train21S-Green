import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PizzaMainComponent } from './pizza-main.component';

const routes: Routes = [{ path: '', component: PizzaMainComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PizzaMainRoutingModule { }
