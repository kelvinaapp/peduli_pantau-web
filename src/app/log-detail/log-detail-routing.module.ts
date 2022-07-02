import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogDetailPage } from './log-detail.page';

const routes: Routes = [
  {
    path: '',
    component: LogDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogDetailPageRoutingModule {}
