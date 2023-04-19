import { Component } from '@angular/core';
import { AuthService } from '../../login/login/auth.service';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent {
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


