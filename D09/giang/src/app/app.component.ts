import { IMPLICIT_REFERENCE } from '@angular/compiler/src/render3/view/util';
import { Component , OnInit} from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'LGwGG';
  constructor(
    private firebase: AngularFireAuth
  ) { }
  public user: any;
  ngOnInit(): void {
    this.firebase.authState.subscribe(auth => {
      if (auth) {
        this.user = auth;
      }
    });
  }
  public login() {
    var provider = new firebase.auth.GoogleAuthProvider();
    return this.firebase.signInWithPopup(provider)
      .then((result) => {
        alert('Login successfull')
      })
      .catch((error) => {
        alert(error)
      })
  }
  async logOut() {
    try {
      await this.firebase.signOut()
      this.firebase = undefined;
      alert('Loged out');
    } catch (err) {
      alert('cannot Logout');
    }

  }


}