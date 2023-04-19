import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import firebase from 'firebase/compat/app';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afauth: AngularFireAuth) {

   }

   async login(email:string, password:string){
      try {
        return await this.afauth.signInWithEmailAndPassword(email,password);
      } catch (error) {
        alert(error);
        return null;
      }
   }

   async register(email:string, password:string){
    try {
      return await this.afauth.createUserWithEmailAndPassword(email,password);
    } catch (error) {
      console.log("error al crear registro: ", error);
      return null;
    }
 }

   async loginWhitGoogle (email:string, password:string){
    try {
      return await this.afauth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    } catch (error) {
      console.log("error en login de Google: ", error);
      return null;
    }
 }

 getUserLogged(){
  return this.afauth.authState;
 }

 logOut(){
  this.afauth.signOut();
 }
}
