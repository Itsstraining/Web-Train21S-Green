import { Component, OnInit } from '@angular/core';
import { Ruou } from '../model/ruou.model';
import { RuouDataService } from '../services/ruou-data.service';

@Component({
  selector: 'app-list-ruou',
  templateUrl: './list-ruou.component.html',
  styleUrls: ['./list-ruou.component.scss']
})
export class ListRuouComponent implements OnInit {
  Ruou: RuouDataService;

  constructor(private listRuou:RuouDataService) { }
  listruou: Ruou[] = this.listRuou.listRuou;

  ngOnInit(): void {

    
  }

}