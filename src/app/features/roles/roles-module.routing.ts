import { RouterModule, Routes } from "@angular/router";
import { LayoutComponent } from "src/app/shared/layout/layout.component";
import { ListarRolesComponent } from "./listar-roles/listar-roles.component";
import { CrearRolesComponent } from "./crear-roles/crear-roles.component";
import { NgModule } from "@angular/core";
import urlConstRouting from 'src/app/shared/constantes/url-const-routing';

const url = urlConstRouting.roles;

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: ListarRolesComponent },
      { path: url.crear, component: CrearRolesComponent},
      { path: '**', redirectTo:'',pathMatch:'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RolesRoutingModule { }
