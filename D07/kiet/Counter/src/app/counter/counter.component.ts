import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  constructor() { }
  @Input()
  public count = 0
  @Output()
  public counterChange: EventEmitter<number> =  new EventEmitter;
  ngOnInit(): void {
  }



  public increase(){

    this.count += 1;
    this.counterChange.emit(this.count);
  }

  public decrease(){
    this.count -= this.count == 0?0:1;
    this.counterChange.emit(this.count);
  }
}
