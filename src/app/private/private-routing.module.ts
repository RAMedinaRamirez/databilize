import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { FormsComponent } from './forms/forms.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  {path:'inicio',component: InicioComponent},
  {path: 'forms', component: FormsComponent},
  {path: 'admin', component: AdminComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
