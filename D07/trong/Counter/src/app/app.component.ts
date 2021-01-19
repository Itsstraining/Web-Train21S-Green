import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public dem = 0;
  title = 'Counter';
  public countChange(x :number){
    this.dem = x;
  }
}
