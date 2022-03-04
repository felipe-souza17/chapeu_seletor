import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChapeuPageRoutingModule } from './chapeu-routing.module';

import { ChapeuPage } from './chapeu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChapeuPageRoutingModule
  ],
  declarations: [ChapeuPage]
})
export class ChapeuPageModule {}
