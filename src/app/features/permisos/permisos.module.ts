import { NgModule } from "@angular/core";
import { ListarPermisosComponent } from "./listar-permisos/listar-permisos.component";
import { CrearPermisoComponent } from "./crear-permiso/crear-permiso.component";
import { CommonModule } from "@angular/common";
import { SharedModule } from "src/app/shared/shared.module";
import { PermisosRoutingModule } from "./permisos-module.routing";


@NgModule({
  declarations: [
    ListarPermisosComponent,
    CrearPermisoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PermisosRoutingModule
  ]
})
export class PermisosModule { }
