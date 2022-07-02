import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogHarianPage } from './log-harian.page';

const routes: Routes = [
  {
    path: '',
    component: LogHarianPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogHarianPageRoutingModule {}
