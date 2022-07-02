import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogHarianPageRoutingModule } from './log-harian-routing.module';

import { LogHarianPage } from './log-harian.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogHarianPageRoutingModule
  ],
  declarations: [LogHarianPage]
})
export class LogHarianPageModule {}
