import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalEventPageRoutingModule } from './modal-event-routing.module';

import { ModalEventPage } from './modal-event.page';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    component: ModalEventPage,
  },
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalEventPageRoutingModule,
    RouterModule.forChild(routes),
  ],
  declarations: [ModalEventPage],
})
export class ModalEventPageModule {}
