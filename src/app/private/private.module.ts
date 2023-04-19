import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateRoutingModule } from './private-routing.module';
import { FormsComponent } from './forms/forms.component';
import { AdminComponent } from './admin/admin.component';
import { InicioComponent } from './inicio/inicio.component';
import { GoogleMapComponent } from './google-map/google-map.component';





@NgModule({
  declarations: [
    FormsComponent,
    AdminComponent,
    InicioComponent,
    GoogleMapComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule
  ]
})
export class PrivateModule { }
