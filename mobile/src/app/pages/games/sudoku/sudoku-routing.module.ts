import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SudokuPage } from './sudoku.page';

const routes: Routes = [
  {
    path: '',
    component: SudokuPage,
  },

  { path: '', redirectTo: 'loading', pathMatch: 'full' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  {
    path: 'play',
    loadChildren: './pages/play/play.module#PlayPageModule',
    runGuardsAndResolvers: 'paramsChange',
  },
  { path: 'about', loadChildren: './pages/about/about.module#AboutPageModule' },
  {
    path: 'loading',
    loadChildren: './pages/loading/loading.module#LoadingPageModule',
  },
  {
    path: 'setting',
    loadChildren: './pages/setting/setting.module#SettingPageModule',
  },
  { path: 'rank', loadChildren: './pages/rank/rank.module#RankPageModule' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SudokuPageRoutingModule {}
