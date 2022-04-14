import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SudokuPageRoutingModule } from './sudoku-routing.module';

import { SudokuPage } from './sudoku.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SudokuPageRoutingModule
  ],
  declarations: [SudokuPage]
})
export class SudokuPageModule {}
