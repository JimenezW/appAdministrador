import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { HttpParamsUtil } from 'src/app/shared/util/httpparams.util';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private urlBase : string = 'api/usuarios';

  constructor(private _http:HttpClient) { }

  getPagination(parm : any): Observable<any> {
    const params = HttpParamsUtil.toHttpParams(parm);

    return this._http.get<any>(this.urlBase, {params}).pipe(
      map(res => {

        if(res.ok)
          return res.body.content;

        return res;
      }),
      catchError(() => {
        return of(false);
      })
    );
  }

  crear(parms : any): Observable<any>{
    return this._http.post<any>(this.urlBase, parms).pipe(
      map(res => {

        if(res.ok)
          return res.body.content;

        return res;
      }),
      catchError(() => {
        return of(false);
      })
    );
  }

}
