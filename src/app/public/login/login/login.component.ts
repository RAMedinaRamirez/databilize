import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario={
    email:'',
    password:''
  }
  constructor(private autenticar:AuthService){
    
  }
  
  ngOnInit(): void {

  }

  ingresar(){
    console.log(this.usuario)
    const { email, password } = this.usuario;
    this.autenticar.login(email, password).then(res => {
      console.log("se registro", res);
    });
  }

  registrarse(){
    console.log(this.usuario)
    const { email, password } = this.usuario;
    this.autenticar.register(email, password).then(res => {
      console.log("se registro", res);
    });
  }
}


