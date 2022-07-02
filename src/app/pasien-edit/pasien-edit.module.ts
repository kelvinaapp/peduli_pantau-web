import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PasienEditPageRoutingModule } from './pasien-edit-routing.module';

import { PasienEditPage } from './pasien-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PasienEditPageRoutingModule
  ],
  declarations: [PasienEditPage]
})
export class PasienEditPageModule {}
