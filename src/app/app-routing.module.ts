import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules  } from '@angular/router';
import { AccessGuard } from './core/Guards/acces.guards';
import { AutGuard } from './core/Guards/aut.guards';
import { UserListComponent } from './features/user-list/user-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
  { path: 'auth', loadChildren:()=> import('./auth/auth.module').then(x => x.AuthModule), canActivate:[AutGuard] },
  { path: 'dashboard',loadChildren:()=>import('./features/dashboard/dashboard.module').then(x => x.DashboardModule), canActivate:[AccessGuard]},
  { path: 'users',loadChildren:()=>import('./features/usuarios/usuarios.module').then(x => x.UsuariosModule), canActivate:[AccessGuard]},
  { path: 'user-list', component: UserListComponent }, // Ruta para el ejemplo de la tabla
  { path: '**', redirectTo:'dashboard',pathMatch:'full'}
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
