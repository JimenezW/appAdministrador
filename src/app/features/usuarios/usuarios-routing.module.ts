import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from 'src/app/shared/layout/layout.component';
import { ListarUsuarioComponent } from './listar/listar-usuario.component';
import { CrearUsuarioComponent } from './crear/crear-usuario.component';
import urlConstRouting from 'src/app/shared/constantes/url-const-routing';
import { NotFoundComponent } from 'src/app/shared/components/not-found/not-found.component';
import { AsignarPermisoComponent } from './asignar-permiso/asignar-permiso.component';
import { AsignarRolComponent } from './asignar-rol/asignar-rol.component';

const url = urlConstRouting.usuarios


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: ListarUsuarioComponent },
      { path: url.crear, component: CrearUsuarioComponent},
      { path: url.asig_permiso, component: AsignarPermisoComponent},
      { path: url.asig_rol, component: AsignarRolComponent},
      { path: '**', component: NotFoundComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
