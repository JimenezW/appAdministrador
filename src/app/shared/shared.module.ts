import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { materialAngular } from '../core/materialAngular';



@NgModule({
  declarations: [
     LayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    materialAngular
  ],
  exports: [
    materialAngular
  ]
})
export class SharedModule { }