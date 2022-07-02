import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FaskesAddPage } from './faskes-add.page';

const routes: Routes = [
  {
    path: '',
    component: FaskesAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FaskesAddPageRoutingModule {}
