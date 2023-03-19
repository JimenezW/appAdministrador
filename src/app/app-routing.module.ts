import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules  } from '@angular/router';
import { ContentLayoutComponent } from '../app/layout/components/content-layout/content-layout.component'
import { AccessGuard } from './core/Guards/acces.guards';
import { AutGuard } from './core/Guards/aut.guards';

const routes: Routes = [
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
  { path: 'auth', loadChildren:()=> import('./auth/auth.module').then(x => x.AuthModule), canActivate:[AutGuard] },
  {
    path:'',
    component: ContentLayoutComponent,
    children:[
      {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
      },
      {
        path: 'home', 
        //component: HomeComponent
        // Ya no se carga el componente, se carga el modulo mediante un dynamic import de js nativo
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule), canActivate:[AccessGuard]
      },
      {
          path: '**',
          redirectTo: 'home',
          pathMatch: 'full',
      }
    ]
  }
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