import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './components/counter/counter.component';

import { ItemListComponent } from './components/item-list/item-list.component';
import { ItemComponent } from './components/item/item/item.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ItemListModule } from './components/item-list/item-list.module';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    ItemListComponent,
    ItemComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ItemListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
