import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from 'src/app/shared/layout/layout.component';
import { ListarUsuarioComponent } from './listar/listar-usuario.component';
import { CrearUsuarioComponent } from './crear/crear-usuario.component';
import urlConstRouting from 'src/app/shared/constantes/url-const-routing';

const url = urlConstRouting.usuarios


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: ListarUsuarioComponent },
      { path: url.crear, component: CrearUsuarioComponent},
      { path: '**', redirectTo:'',pathMatch:'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
