import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
// import * as EventEmitter from 'events';
import { Ruou } from '../model/ruou.model';
import { RuouDataService } from '../services/ruou-data.service';

@Component({
  selector: 'app-ruou',
  templateUrl: './ruou.component.html',
  styleUrls: ['./ruou.component.scss']
})
export class RuouComponent implements OnInit {

  constructor( ) { }
  @Input()
  public ruou: Ruou;
  public count = 0;
  @Output()
  public counterchange: EventEmitter<number>=new EventEmitter;
  ngOnInit(): void {
  }
  public cong(){
    this.count++;
    this.counterchange.emit(this.count);
  }
  public tru(){
      if(this.count==0){
        return;
      }
      this.count--;
      this.counterchange.emit(this.count);
  }
}
