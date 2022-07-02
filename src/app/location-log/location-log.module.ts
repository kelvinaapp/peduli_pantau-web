import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocationLogPageRoutingModule } from './location-log-routing.module';

import { LocationLogPage } from './location-log.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocationLogPageRoutingModule
  ],
  declarations: [LocationLogPage]
})
export class LocationLogPageModule {}
