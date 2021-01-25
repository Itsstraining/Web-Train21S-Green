import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TexboxRoutingModule } from './texbox-routing.module';
import { TexboxComponent } from './texbox.component';


@NgModule({
  declarations: [TexboxComponent],
  imports: [
    CommonModule,
    TexboxRoutingModule
  ]
})
export class TexboxModule { }
