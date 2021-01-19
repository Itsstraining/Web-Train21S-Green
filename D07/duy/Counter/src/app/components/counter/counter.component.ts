import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';


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
  public counterChange: EventEmitter<number>=new EventEmitter;

    public increase(){
    this.count++;
    this.counterChange.emit(this.count);

  }

  public decrease(){
     if(this.count==0){
      return
    }
    this.count--;
    this.counterChange.emit(this.count);
  }


  ngOnInit(): void {
  }

}
