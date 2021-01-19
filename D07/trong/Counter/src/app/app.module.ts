import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { ItemComponent } from './components/item/item.component';
import { ItemListComponent } from './list1/item-list/item-list.component';
import { NagbarComponent } from './nagbar/nagbar/nagbar.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    ItemComponent,
    ItemListComponent,
    NagbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
