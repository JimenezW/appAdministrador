import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { materialAngular } from '../core/materialAngular';
import { DynamicTableComponent } from './components/dynamic-table/dynamic-table.component';
import { MensajeAlertComponent } from './components/mensaje-alert/mensaje-alert.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { MenuComponent } from './components/menu/menu.component';



@NgModule({
  declarations: [
    LayoutComponent,
    DynamicTableComponent,
    MensajeAlertComponent,
    SpinnerComponent,
    MenuComponent
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
    SpinnerComponent,
    MenuComponent
  ]
})
export class SharedModule { }
