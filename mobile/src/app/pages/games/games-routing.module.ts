import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GamesPage } from './games.page';

const routes: Routes = [
  {
    path: '',
    component: GamesPage,
  },

  {
    path: 'memory-puzzle',
    loadChildren: () =>
      import('./memory-puzzle/memory-puzzle.module').then(
        (m) => m.MemoryPuzzlePageModule
      ),
  },
  {
    path: 'sudoku',
    loadChildren: () => import('./sudoku/sudoku.module').then( m => m.SudokuPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GamesPageRoutingModule {}
