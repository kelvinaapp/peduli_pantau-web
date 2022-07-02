import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EdukasiAddPage } from './edukasi-add.page';

const routes: Routes = [
  {
    path: '',
    component: EdukasiAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EdukasiAddPageRoutingModule {}
