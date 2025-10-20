import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { materialAngular } from '../core/materialAngular';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';
import { MensajeAlertComponent } from './components/mensaje-alert/mensaje-alert.component';



@NgModule({
  declarations: [
     LayoutComponent,
     DynamicTableComponent,
     MensajeAlertComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    materialAngular
  ],
  exports: [
    materialAngular,
    DynamicTableComponent,
    MensajeAlertComponent
  ]
})
export class SharedModule { }