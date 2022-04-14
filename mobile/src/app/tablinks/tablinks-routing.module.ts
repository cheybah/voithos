import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablinksPage } from './tablinks.page';

const routes: Routes = [
  {
    path: '',
    component: TablinksPage,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./../home/home.module').then((m) => m.HomePageModule),
      },
      {
        path: '',
        loadChildren: () =>
          import('./../home/home.module').then((m) => m.HomePageModule),
      },
      {
        path: 'games',
        loadChildren: () =>
          import('./../pages/games/games.module').then(
            (m) => m.GamesPageModule
          ),
      },
      {
        path: 'reminder',
        loadChildren: () =>
          import('./../pages/reminder/reminder.module').then(
            (m) => m.ReminderPageModule
          ),
      },

      {
        path: 'tracking',
        loadChildren: () =>
          import('../tracking/tracking.module').then(
            (m) => m.TrackingPageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablinksPageRoutingModule {}
