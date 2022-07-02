import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PasienDetailPageRoutingModule } from './pasien-detail-routing.module';

import { PasienDetailPage } from './pasien-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PasienDetailPageRoutingModule
  ],
  declarations: [PasienDetailPage]
})
export class PasienDetailPageModule {}
