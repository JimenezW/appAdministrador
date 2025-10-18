import { RouterModule, Routes } from "@angular/router";
import { LayoutComponent } from "src/app/shared/layout/layout.component";
import { ListarRolesComponent } from "./listar-roles/listar-roles.component";
import { CrearRolesComponent } from "./crear-roles/crear-roles.component";
import { NgModule } from "@angular/core";


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: ListarRolesComponent },
      { path: 'crear', component: CrearRolesComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RolesRoutingModule { }
