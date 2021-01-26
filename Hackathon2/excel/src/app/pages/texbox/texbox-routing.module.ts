import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TexboxComponent } from './texbox.component';

const routes: Routes = [{ path: '', component: TexboxComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TexboxRoutingModule { }
