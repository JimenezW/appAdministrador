import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { materialAngular } from './core/materialAngular';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    CoreModule,
    NgbModule,
    BrowserAnimationsModule, materialAngular
  ],
  exports:[CoreModule, HttpClientModule, materialAngular],
  providers: [{ provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
