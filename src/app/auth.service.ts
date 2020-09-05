import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";
import { AngularFireDatabase } from "@angular/fire/database";
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from "rxjs";

// authentication for creation of users

interface User {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isloggedin: boolean = false;


  constructor(public afauth: AngularFireAuth) {

  }

  isLoggedIn(){
    return this.isloggedin;
  }

  createuser(email: string, password: string){
    this.isloggedin = true;
    return this.afauth.createUserWithEmailAndPassword(email, password);
  }

  logout(){
    this.isloggedin = false;
    return this.afauth.signOut();
  }
}
