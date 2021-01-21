import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCommonModule} from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './components/dialog/dialog.component';



@NgModule({
  declarations: [DialogComponent],
  imports: [
    CommonModule, MatCommonModule, MatGridListModule, MatCardModule, MatButtonModule, MatDialogModule,
  ],
  exports: [
    CommonModule, MatCommonModule, MatGridListModule, MatCardModule, MatButtonModule, MatDialogModule, DialogComponent,
  ]
})
export class SharedModule { }
