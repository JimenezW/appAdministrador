import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersHomeComponent } from './users-home/users-home.component';
import { materialAngular } from 'src/app/core/materialAngular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdmUsersRoutingModule } from './adm-rotuing.module';
import { HttpClientModule } from '@angular/common/http';
import { CreateUserComponent } from './create-user/create-user.component';



@NgModule({
  declarations: [
    UsersHomeComponent,
    CreateUserComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    materialAngular,
    SharedModule,
    AdmUsersRoutingModule,
    HttpClientModule
  ]
})
export class AdmUsersModule { }
