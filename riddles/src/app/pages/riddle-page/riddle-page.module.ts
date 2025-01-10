import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RiddlePagePageRoutingModule } from './riddle-page-routing.module';

import { RiddlePagePage } from './riddle-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RiddlePagePage,
    RiddlePagePageRoutingModule,
  ],
})
export class RiddlePagePageModule {}
