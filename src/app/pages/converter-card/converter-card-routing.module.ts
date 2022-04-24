import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConverterCardPage } from './converter-card.page';

const routes: Routes = [
  {
    path: '',
    component: ConverterCardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConverterCardPageRoutingModule {}
