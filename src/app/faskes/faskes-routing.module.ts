import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FaskesPage } from './faskes.page';

const routes: Routes = [
  {
    path: '',
    component: FaskesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FaskesPageRoutingModule {}
