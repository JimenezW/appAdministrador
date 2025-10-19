import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LayoutComponent } from "src/app/shared/layout/layout.component";
import { ListarPermisosComponent } from "./listar-permisos/listar-permisos.component";
import { CrearPermisoComponent } from "./crear-permiso/crear-permiso.component";
import urlConstRouting from 'src/app/shared/constantes/url-const-routing';

const url = urlConstRouting.permisos;

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: ListarPermisosComponent },
      { path: url.crear, component: CrearPermisoComponent},
      { path: '**', redirectTo:'',pathMatch:'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PermisosRoutingModule { }
