import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngreRondaPage } from './ingre-ronda.page';

const routes: Routes = [
  {
    path: '',
    component: IngreRondaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngreRondaPageRoutingModule {}
