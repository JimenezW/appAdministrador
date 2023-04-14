import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SortDirection } from '@angular/material/sort';
import { Observable, tap } from 'rxjs';
import { JsonResponceI } from 'src/app/data/JsonResponse.Interface';
import { JwtResponseI } from 'src/app/data/JwtResponseI.Interface';

@Injectable({
  providedIn: 'root'
})
export class AdmUserService {

  constructor(private _http:HttpClient) { }
//sort: string, order: SortDirection, page: number
  UserList(sort: string, order: SortDirection, page: number, rosw:number):Observable<JsonResponceI>{
      
    return this._http.post<JsonResponceI>(`/api/adm-user?sort=${sort}&order=${order}&page=${page+1}&rows=${rosw}`,{ }).pipe(tap((res:JsonResponceI)=>{  }));
    
  }
}
