import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EdukasiEditPageRoutingModule } from './edukasi-edit-routing.module';

import { EdukasiEditPage } from './edukasi-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EdukasiEditPageRoutingModule
  ],
  declarations: [EdukasiEditPage]
})
export class EdukasiEditPageModule {}
