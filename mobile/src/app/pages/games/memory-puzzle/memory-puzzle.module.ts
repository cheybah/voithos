import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MemoryPuzzlePageRoutingModule } from './memory-puzzle-routing.module';

import { MemoryPuzzlePage } from './memory-puzzle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MemoryPuzzlePageRoutingModule
  ],
  declarations: [MemoryPuzzlePage]
})
export class MemoryPuzzlePageModule {}
