import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './components/counter/counter.component';
import { ItemComponent } from './item/item/item.component';
import { NavbarComponent } from './navBar/navbar/navbar.component';
import { ItemlistComponent } from './list/itemlist/itemlist.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    ItemComponent,
    NavbarComponent,
    ItemlistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
