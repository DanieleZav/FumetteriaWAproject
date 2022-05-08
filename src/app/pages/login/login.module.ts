import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { TitoloDevskillModule } from 'src/app/components/titolo-devskill/titolo-devskill.module';
import { PulsanteGenericoComponent } from 'src/app/components/pulsante-generico/pulsante-generico.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    
  ],
  declarations: [LoginPage,PulsanteGenericoComponent]
})
export class LoginPageModule {}

