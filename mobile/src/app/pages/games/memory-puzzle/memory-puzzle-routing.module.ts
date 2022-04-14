import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MemoryPuzzlePage } from './memory-puzzle.page';

const routes: Routes = [
  {
    path: '',
    component: MemoryPuzzlePage
  },
  {
    path: 'level1',
    loadChildren: () => import('./level1/level1.module').then( m => m.Level1PageModule)
  },
  {
    path: 'level2',
    loadChildren: () => import('./level2/level2.module').then( m => m.Level2PageModule)
  },
  {
    path: 'level3',
    loadChildren: () => import('./level3/level3.module').then( m => m.Level3PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MemoryPuzzlePageRoutingModule {}
