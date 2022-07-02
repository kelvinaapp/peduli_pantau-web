import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonitorLogPage } from './monitor-log.page';

const routes: Routes = [
  {
    path: '',
    component: MonitorLogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonitorLogPageRoutingModule {}
