import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./tablinks/tablinks.module').then((m) => m.TablinksPageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'tracking',
    loadChildren: () =>
      import('./tracking/tracking.module').then((m) => m.TrackingPageModule),
  },
  {
    path: 'games',
    loadChildren: () =>
      import('./pages/games/games.module').then((m) => m.GamesPageModule),
  },
  {
    path: 'reminder',
    loadChildren: () =>
      import('./pages/reminder/reminder.module').then(
        (m) => m.ReminderPageModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'welcome-page',
    loadChildren: () =>
      import('./pages/welcome-page/welcome-page.module').then(
        (m) => m.WelcomePagePageModule
      ),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./pages/register/register.module').then(
        (m) => m.RegisterPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
