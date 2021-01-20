import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  constructor() { }
@Input()
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

