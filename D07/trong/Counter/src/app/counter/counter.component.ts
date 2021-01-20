import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { Button } from 'protractor';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  @Input()
  public count = 0;

  @Output()
  public counterChange: EventEmitter<number> = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }
  public cong(){
    this.count++;
    this.counterChange.emit(this.count);
  }
  public tru(){
    if(this.count == 0 ){
      return ;
    }
    this.count--;
    this.counterChange.emit(this.count);
  }
}
