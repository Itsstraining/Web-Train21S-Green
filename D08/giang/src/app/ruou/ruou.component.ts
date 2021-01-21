import { Component, Input, OnInit } from '@angular/core';
import { Ruou } from '../model/ruou.model';

@Component({
  selector: 'app-ruou',
  templateUrl: './ruou.component.html',
  styleUrls: ['./ruou.component.scss']
})
export class RuouComponent implements OnInit {

  constructor() { }
  @Input()
  public ruou: Ruou;
  ngOnInit(): void {
  }

}
