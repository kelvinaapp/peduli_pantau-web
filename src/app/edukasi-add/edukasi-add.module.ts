import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EdukasiAddPageRoutingModule } from './edukasi-add-routing.module';

import { EdukasiAddPage } from './edukasi-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EdukasiAddPageRoutingModule
  ],
  declarations: [EdukasiAddPage]
})
export class EdukasiAddPageModule {}
