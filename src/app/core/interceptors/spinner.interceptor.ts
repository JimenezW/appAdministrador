import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpResponse } from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { HttpEvent } from '@angular/common/http';
import { finalize, tap } from 'rxjs/operators';

import { SpinnerService } from '../services/spinner.service';
import { SpinnerBackGroundService } from 'src/app/shared/services/SpinnerService';

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {

    constructor(
      private spinnerService: SpinnerService,
      private readonly spinner : SpinnerBackGroundService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      this.spinnerService.show();
      this.spinner.show();

        return next
            .handle(req)
            .pipe(
                tap((event: HttpEvent<any>) => {
                    if (event instanceof HttpResponse) {
                        this.spinnerService.hide();
                    }
                }, (error) => {
                    this.spinnerService.hide();
                })
            ,finalize(()=>{ this.spinner.hide(); }));
    }
}
