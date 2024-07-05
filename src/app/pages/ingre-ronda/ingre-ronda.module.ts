import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngreRondaPageRoutingModule } from './ingre-ronda-routing.module';

import { IngreRondaPage } from './ingre-ronda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngreRondaPageRoutingModule
  ],
  declarations: [IngreRondaPage]
})
export class IngreRondaPageModule {}
