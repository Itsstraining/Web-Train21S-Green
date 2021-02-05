import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.css']
})
export class LobbyComponent implements OnInit {
  baseURL: string = 'http://192.168.31.158:8080';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  getgame() {
    this.http.get('http://192.168.31.158:8080').subscribe((Response) => {
      alert("game on")
    });
  }
}
