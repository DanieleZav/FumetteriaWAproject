import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConverterCardPageRoutingModule } from './converter-card-routing.module';

import { ConverterCardPage } from './converter-card.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConverterCardPageRoutingModule
  ],
  declarations: [ConverterCardPage]
})
export class ConverterCardPageModule {}
