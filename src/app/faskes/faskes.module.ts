import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FaskesPageRoutingModule } from './faskes-routing.module';

import { FaskesPage } from './faskes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FaskesPageRoutingModule
  ],
  declarations: [FaskesPage]
})
export class FaskesPageModule {}
