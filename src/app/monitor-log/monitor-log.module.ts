import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MonitorLogPageRoutingModule } from './monitor-log-routing.module';

import { MonitorLogPage } from './monitor-log.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MonitorLogPageRoutingModule
  ],
  declarations: [MonitorLogPage]
})
export class MonitorLogPageModule {}
