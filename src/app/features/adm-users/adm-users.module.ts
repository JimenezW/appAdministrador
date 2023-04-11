import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersHomeComponent } from './users-home/users-home.component';
import { materialAngular } from 'src/app/core/materialAngular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdmUsersRoutingModule } from './adm-rotuing.module';



@NgModule({
  declarations: [
    UsersHomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    materialAngular,
    SharedModule,
    AdmUsersRoutingModule
  ]
})
export class AdmUsersModule { }
