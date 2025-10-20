import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { HttpParamsUtil } from 'src/app/shared/util/httpparams.util';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  private urlBase : string = 'api/roles';

  constructor(private _http:HttpClient) { }

  getAll(parm : any): Observable<any> {
    const params = HttpParamsUtil.toHttpParams(parm);

    return this._http.get<any>(this.urlBase, {
      observe: 'response',
      params
    }).pipe(
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
          return res.content;

        return res;
      }),
      catchError(() => {
        return of(false);
      })
    );
  }

}
