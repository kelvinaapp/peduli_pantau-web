import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FaskesAddPageRoutingModule } from './faskes-add-routing.module';

import { FaskesAddPage } from './faskes-add.page';
import {  ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FaskesAddPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [FaskesAddPage]
})
export class FaskesAddPageModule {}
