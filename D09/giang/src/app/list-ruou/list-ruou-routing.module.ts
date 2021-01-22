import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ListRuouComponent  } from '../list-ruou/list-ruou.component';

const routes: Routes = [{ path: '', component: ListRuouComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRuouRoutingModule { }
