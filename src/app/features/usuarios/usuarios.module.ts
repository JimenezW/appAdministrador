import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { CrearUsuarioComponent } from './crear/crear-usuario.component';
import { ListarUsuarioComponent } from './listar/listar-usuario.component';
import { UsuariosRoutingModule } from './usuarios-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AsignarRolComponent } from './asignar-rol/asignar-rol.component';
import { AsignarPermisoComponent } from './asignar-permiso/asignar-permiso.component';



@NgModule({
  declarations: [
    CrearUsuarioComponent,
    ListarUsuarioComponent,
    AsignarRolComponent,
    AsignarPermisoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UsuariosRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UsuariosModule { }
