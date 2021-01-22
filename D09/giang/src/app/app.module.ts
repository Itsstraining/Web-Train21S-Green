import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RuouComponent } from './ruou/ruou.component';
import { ListRuouComponent } from './list-ruou/list-ruou.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { ListRuouModule } from './list-ruou/list-ruou.module';

@NgModule({
  declarations: [
    AppComponent,
    RuouComponent,
    ListRuouComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ListRuouModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
