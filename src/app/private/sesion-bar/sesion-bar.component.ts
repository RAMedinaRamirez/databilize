import { Component } from '@angular/core';
import { AuthService } from 'src/app/public/login/login/auth.service';

@Component({
  selector: 'app-sesion-bar',
  templateUrl: './sesion-bar.component.html',
  styleUrls: ['./sesion-bar.component.css']
})
export class SesionBarComponent {
  currentdate = new Date()
  userLogged=this.auhtService.getUserLogged();
  constructor(private auhtService:AuthService){
    
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
