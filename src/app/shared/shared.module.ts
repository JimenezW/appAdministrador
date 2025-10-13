import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { materialAngular } from '../core/materialAngular';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';



@NgModule({
  declarations: [
     LayoutComponent,
     DynamicTableComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    materialAngular
  ],
  exports: [
    materialAngular,
    DynamicTableComponent
  ]
})
export class SharedModule { }