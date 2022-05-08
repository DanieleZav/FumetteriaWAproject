import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CongDiCollatzPage } from './cong-di-collatz.page';

const routes: Routes = [
  {
    path: '',
    component: CongDiCollatzPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CongDiCollatzPageRoutingModule {}
