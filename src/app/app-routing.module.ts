import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules  } from '@angular/router';
import { AccessGuard } from './core/Guards/acces.guards';
import { AutGuard } from './core/Guards/aut.guards';

const routes: Routes = [
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
  { path: 'auth', loadChildren:()=> import('./auth/auth.module').then(x => x.AuthModule), canActivate:[AutGuard] },
  { path: 'dashboard',loadChildren:()=>import('./features/dashboard/dashboard.module').then(x=>x.DashboardModule), canActivate:[AccessGuard]},
  { path: 'users', loadChildren:()=>import('./features/adm-users/adm-users.module').then(x=>x.AdmUsersModule), canActivate:[AccessGuard]},
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
