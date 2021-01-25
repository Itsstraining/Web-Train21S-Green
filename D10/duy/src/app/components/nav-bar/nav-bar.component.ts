import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import * as firebase from 'firebase';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  constructor(private auth: AngularFireAuth) {}

  public provider = new firebase.default.auth.GoogleAuthProvider();

  async login() {
    await this.auth
      .signInWithPopup(this.provider)
      .then((result) => {
        alert('logged in');
      })
      .catch((error) => {
        alert(error);
      });
  }
  async logout() {
    await this.auth.signOut();
    this.user = null;
    // try {
    //   this.user = null;
    // } catch {
    //   alert('get fuc');
    // }
  }
  public user: any;
  ngOnInit(): void {
    this.auth.authState.subscribe((kiet) => {
      if (kiet) {
        this.user = kiet;
      }
    });
  }
}
