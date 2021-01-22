import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RuouRoutingModule } from './ruou-routing.module';
import { RuouComponent } from './ruou.component';


@NgModule({
  declarations: [RuouComponent],
  imports: [
    CommonModule,
    RuouRoutingModule
  ]
})
export class RuouModule { }
