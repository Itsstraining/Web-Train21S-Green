import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Demo';
  constructor(
    public firebase:AngularFireAuth,
  ){}
  public user:any;
  ngOnInit(): void {
   this.firebase.authState.subscribe(auth=>{
     if (auth) {
       this.user=auth;
     }
   });
    }


public login(){
   var provider = new firebase.default.auth.GoogleAuthProvider();
   return this.firebase.signInWithPopup(provider)
   .then((result) => {
    alert('You have been successfully logged in!')
}).catch((error) => {
    alert(error)
})
}
async logout(){
  try{
    await this.firebase.signOut()
    this.firebase=undefined;
    alert('ok');
  }catch(err){
    alert('sai');
  }
}

}
