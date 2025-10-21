import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules  } from '@angular/router';
import { AccessGuard } from './core/Guards/acces.guards';
import { AutGuard } from './core/Guards/aut.guards';
import urlConstRouting from 'src/app/shared/constantes/url-const-routing';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

const url = urlConstRouting;


const routes: Routes = [
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
  { path: 'auth', loadChildren:()=> import('./auth/auth.module').then(x => x.AuthModule), canActivate:[AutGuard] },
  { path: url.dashboard.base,loadChildren:()=>import('./features/dashboard/dashboard.module').then(x => x.DashboardModule), canActivate:[AccessGuard]},
  { path: url.usuarios.base,loadChildren:()=>import('./features/usuarios/usuarios.module').then(x => x.UsuariosModule), canActivate:[AccessGuard]},
  { path: url.roles.base, loadChildren:()=>import('./features/roles/roles.module').then(x=> x.RolesModule), canActivate:[AccessGuard]},
  { path: url.permisos.base, loadChildren:()=>import('./features/permisos/permisos.module').then(x=> x.PermisosModule), canActivate:[AccessGuard]},
  { path: '**', component: NotFoundComponent, canActivate:[AccessGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
    scrollPositionRestoration: 'top',
    anchorScrolling: 'enabled',
    initialNavigation: 'enabledBlocking'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
