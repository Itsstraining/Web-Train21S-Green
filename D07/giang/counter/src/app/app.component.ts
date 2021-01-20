import { Component } from '@angular/core';
import { defaultMaxListeners } from 'events';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'counter';
  public dem=0;
  public countchange(x){
    this.dem=x;
  }
}