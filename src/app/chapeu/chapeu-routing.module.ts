import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChapeuPage } from './chapeu.page';

const routes: Routes = [
  {
    path: '',
    component: ChapeuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChapeuPageRoutingModule {}
