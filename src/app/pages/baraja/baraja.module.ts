import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BarajaPageRoutingModule } from './baraja-routing.module';

import { BarajaPage } from './baraja.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BarajaPageRoutingModule
  ],
  declarations: [BarajaPage]
})
export class BarajaPageModule {}
