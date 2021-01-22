import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RuouComponent } from './ruou.component';

const routes: Routes = [{ path: '', component: RuouComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RuouRoutingModule { }
