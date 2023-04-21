import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { materialAngular } from '../core/materialAngular';
import { DialogshowComponent } from '../shared/dialogshow/dialogshow.component';



@NgModule({
  declarations: [
     LayoutComponent,
     DialogshowComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    materialAngular
  ],
  exports: [
    materialAngular,
    DialogshowComponent
  ]
})
export class SharedModule { }