import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { ListarRolesComponent } from "./listar-roles/listar-roles.component";
import { CrearRolesComponent } from "./crear-roles/crear-roles.component";
import { RolesRoutingModule } from "./roles-module.routing";


@NgModule({
  declarations: [
    ListarRolesComponent,
    CrearRolesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RolesRoutingModule
  ]
})
export class RolesModule { }
