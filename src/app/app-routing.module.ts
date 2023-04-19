import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './private/admin/admin.component';
import { FormsComponent } from './private/forms/forms.component';
import { InicioComponent } from './private/inicio/inicio.component';
import { LoginComponent } from './public/login/login/login.component';


const routes: Routes = [
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
  {path:'inicio',component: InicioComponent},
  {path: 'forms', component: FormsComponent},
  {path: 'admin', component: AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
