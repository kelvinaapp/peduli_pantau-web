import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocationLogPage } from './location-log.page';

const routes: Routes = [
  {
    path: '',
    component: LocationLogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocationLogPageRoutingModule {}
