import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';


@Component({
  selector: 'app-nav',
  templateUrl: '../../components/nav/nav.component.html',
  styleUrls: ['../../components/nav/nav.component.scss']
})
export class NavComponent implements OnInit {
  
  public provider = new firebase.default.auth.GoogleAuthProvider();
  constructor(private auth:AngularFireAuth) { }
  public user:any;
  ngOnInit(): void {
    this.auth.authState.subscribe(helo=>{
      if(helo){
        this.user=helo;
        
      }
    });
  };

  // public login(){
  //   return this.auth.signInWithPopup(this.provider);
  // }

  async login() {
    try {
      await this.auth.signInWithPopup(this.provider);
      console.log(this.user)
      alert("login successfully");
    } catch (error) {
      alert("login failed"); 
    }
  }

  async signOut(){
    await firebase.default.auth().signOut().then(() => {
      alert("Sign-out successful.")
      this.user=null
      console.log(this.user)
    }).catch((error) => {
      alert("An error happened.")
    });
  }


}
