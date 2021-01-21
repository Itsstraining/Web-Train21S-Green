import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListItemRoutingModule } from './list-item-routing.module';
import { ListItemComponent } from './list-item.component';
import { ItemComponent } from './components/item/item.component';
import { ListComponent } from './components/list/list.component';


@NgModule({
  declarations: [ListItemComponent, ItemComponent, ListComponent],
  imports: [
    CommonModule,
    ListItemRoutingModule
  ]
})
export class ListItemModule { }
