import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { materialAngular } from './materialAngular';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    materialAngular
  ],
  providers: [
    UserService
  ]
})
export class CoreModule {

  constructor (@Optional() @SkipSelf() parentModule : CoreModule){
    if(parentModule){
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }

 }