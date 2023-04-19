import { Component } from '@angular/core';
import { AuthService } from './public/login/login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'databilize';
  userLogged=this.auhtService.getUserLogged();
  
  constructor(private auhtService:AuthService){
    console.log("variable",this.userLogged);
  }
  obtenerUsuario(){
    this.auhtService.getUserLogged().subscribe(res=>{
      console.log(res?.email)
    });
  }

  logout(){
    this.auhtService.logOut();
  }
}


