import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LayoutComponent } from "src/app/shared/layout/layout.component";
import { ListarPermisosComponent } from "./listar-permisos/listar-permisos.component";
import { CrearPermisoComponent } from "./crear-permiso/crear-permiso.component";


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: ListarPermisosComponent },
      { path: 'crear', component: CrearPermisoComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PermisosRoutingModule { }
