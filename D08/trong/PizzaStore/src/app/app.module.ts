import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NavBarComponent} from '../app/pages/pizza-main/nav-bar/nav-bar.component';
import { CartModule } from './pages/pizza-main/component/cart/cart.module';
import { ItemModule } from './item/item.module';
import { ItemListModule } from './item-list/item-list.module'
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CartModule,
    ItemModule,
    ItemListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
