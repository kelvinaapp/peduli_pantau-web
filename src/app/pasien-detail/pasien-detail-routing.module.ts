import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PasienDetailPage } from './pasien-detail.page';

const routes: Routes = [
  {
    path: '',
    component: PasienDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PasienDetailPageRoutingModule {}
