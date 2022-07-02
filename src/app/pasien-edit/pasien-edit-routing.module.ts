import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PasienEditPage } from './pasien-edit.page';

const routes: Routes = [
  {
    path: '',
    component: PasienEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PasienEditPageRoutingModule {}
