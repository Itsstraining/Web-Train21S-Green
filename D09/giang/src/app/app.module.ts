import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire'
import {AngularFireAuthModule} from '@angular/fire/auth';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RuouComponent } from './ruou/ruou.component';
import { ListRuouComponent } from './list-ruou/list-ruou.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { ListRuouModule } from './list-ruou/list-ruou.module';
import { environment } from 'src/environments/environment';

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
    ListRuouModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
