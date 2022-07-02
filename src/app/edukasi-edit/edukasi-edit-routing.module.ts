import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EdukasiEditPage } from './edukasi-edit.page';

const routes: Routes = [
  {
    path: '',
    component: EdukasiEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EdukasiEditPageRoutingModule {}
