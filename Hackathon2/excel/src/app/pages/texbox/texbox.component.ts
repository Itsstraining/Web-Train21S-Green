import { Component, OnInit } from '@angular/core';
import { PostfixService } from 'src/app/services/postfix.service';

@Component({
  selector: 'app-texbox',
  templateUrl: './texbox.component.html',
  styleUrls: ['./texbox.component.scss']
})
export class TexboxComponent implements OnInit {

  constructor(public postFix:PostfixService) { }

  ngOnInit(): void {
  }

  

}
