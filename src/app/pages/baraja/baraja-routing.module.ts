import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BarajaPage } from './baraja.page';

const routes: Routes = [
  {
    path: '',
    component: BarajaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BarajaPageRoutingModule {}
