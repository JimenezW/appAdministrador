import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { materialAngular } from './materialAngular';
import { UserService } from './services/user.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SpinnerInterceptor } from './interceptors/spinner.interceptor';
import { AccessGuard } from './Guards/acces.guards';
import { AutGuard } from './Guards/aut.guards';
import { NGXLogger } from 'ngx-logger';
import { UrlInterceptor } from './interceptors/url.interceptor';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    materialAngular
  ],
  providers: [
    AutGuard,
    AccessGuard,
    UserService,
    {
      provide : HTTP_INTERCEPTORS,
      useClass : SpinnerInterceptor,
      multi : true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UrlInterceptor,
      multi: true
    },
    { provide: NGXLogger, useClass: NGXLogger },
    { provide: 'LOCALSTORAGE', useValue: window.localStorage }
  ]
})
export class CoreModule {

  constructor (@Optional() @SkipSelf() parentModule : CoreModule){
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

 }

 export function throwIfAlreadyLoaded(parentModule: any, moduleName: string) {
  if (parentModule) {
    throw new Error(`${moduleName} has already been loaded. Import Core modules in the AppModule only.`);
  }
}
