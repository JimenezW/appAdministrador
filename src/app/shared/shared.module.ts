import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { materialAngular } from '../core/materialAngular';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';
import { MensajeAlertComponent } from './components/mensaje-alert/mensaje-alert.component';
import { SpinnerComponent } from './spinner/spinner.component';



@NgModule({
  declarations: [
    LayoutComponent,
    DynamicTableComponent,
    MensajeAlertComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    materialAngular
  ],
  exports: [
    materialAngular,
    DynamicTableComponent,
    MensajeAlertComponent,
    SpinnerComponent
  ]
})
export class SharedModule { }
