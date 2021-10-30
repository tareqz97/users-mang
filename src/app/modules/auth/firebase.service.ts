import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  isLoggedIn= false;
  constructor(public firebaseAuth: AngularFireAuth) { }

  // async signin(email: string,password:string){
  //   await this.firebaseAuth.signInWithEmailAndPassword(email,password).then(res =>{
  //     this.isLoggedIn = true;
  //     alert("yahoooooooooooo")
  //   })
  // }

  async signin(email: string,password:string){
    await this.firebaseAuth.signInWithEmailAndPassword(email,password).then(res =>{
      this.isLoggedIn = true;
      alert("yahoooooooooooo")
      console.log(res)
    },
    err =>{
      this.isLoggedIn = false;
    }
    )
  }
}
