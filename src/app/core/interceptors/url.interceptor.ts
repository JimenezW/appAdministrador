import { HttpErrorResponse,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest
 } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import {
    Observable,
    throwError } from "rxjs";
import {
    catchError } from 'rxjs/operators';
import { Router } from "@angular/router";
import { UserService } from '../services/user.service';

@Injectable()

export class UrlInterceptor implements HttpInterceptor{

  constructor(
    private _snackBar: MatSnackBar,
    private _router : Router,
    private _auth : UserService){
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({ withCredentials : true });

    if(request.url === '/api/login'){
      return next.handle(request).pipe();
    }

    return next.handle(this.addAuthToken(request)).pipe(
      catchError((requestError : HttpErrorResponse) => {
        if(requestError && requestError.status === 401){
          let snackBar = this._snackBar.open('MessageLogin.expirtSession', 'Cerrar sesion',
          {
            horizontalPosition: 'center',
            verticalPosition: 'top'
          });

          snackBar.afterDismissed().subscribe(()=> {
            this._auth.logout();
            this._router.navigateByUrl('/');
          });
        }

        if(requestError && requestError.status === 504){
          this._snackBar.open(requestError.message, 'Aviso',
            {
              horizontalPosition: 'center',
              verticalPosition: 'top'
            });
            // this._messague.message('Aviso', MessageLogin.ConnectError, 3)
        }

        return throwError(()=> new Error(requestError.message))

      })
      );
  }

  private addAuthToken(request:HttpRequest<any>){
    return request.clone({
      setHeaders: {
      Accept :'*/*',
      Connetion : 'keep-alive',
      "Content-Type": "application/json"
     }
    });
  }
}
