import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReminderPage } from './reminder.page';

const routes: Routes = [
  {
    path: '',
    component: ReminderPage,
  },
  {
    path: 'modal',
    loadChildren: () =>
      import('./modal/modal.module').then((m) => m.ModalPageModule),
  },
  {
    path: 'event/:id',
    loadChildren: () =>
      import('./event/event.module').then((m) => m.EventPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReminderPageRoutingModule {}
