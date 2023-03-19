import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, catchError, Observable, of, tap } from 'rxjs';
import { UserI } from 'src/app/data/UserI.Interface';
import { JwtResponseI } from 'src/app/data/JwtResponseI.Interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  autSubject = new BehaviorSubject(false);
  private token: string = "";

  constructor(private _http:HttpClient,
    private _cookie : CookieService,
    private jwtHelper: JwtHelperService) { }

    register(user:UserI):Observable<JwtResponseI>{
      return this._http.post<JwtResponseI>(`http://localhost:50592/register`,user).pipe(tap((res:JwtResponseI)=>{
        if(res){
          //guardar token
          this.saveToken(res.jwtToken,res.expireAt);
        }
      })
      );
    }
  
    login(user:any):Observable<JwtResponseI>{
      return this._http.post<JwtResponseI>(`http://localhost:50592/api/login/authenticate`,user).pipe(tap((res:JwtResponseI)=>{
        
        if(res){
          //guardar token
          this.saveToken(res.jwtToken,res.expireAt);
  
        }
      }),catchError((err)=>{
        return of(err);
      })
      );
    }
  
    logout():void{
      this.token='';
      this._cookie.deleteAll();
      
    }
  
    private saveToken(token:string, expiresIn:string):void{
      this.token=token;
  
      //let expireInTem : number = +expiresIn
  
      let dateExpire = new Date(expiresIn).setHours(-24);
      
      //dateExpire.setSeconds(expireInTem);
  
      this._cookie.set('access_token',token,dateExpire,'/')
      this._cookie.set('dateExpire',expiresIn)
    }
  
    public isLoggedIn() {
      const token: string = this.getToken();
  
      return token != '' && !this.jwtHelper.isTokenExpired(token);
    }
  
    public getToken() : string {
      this.token = "";
      if(this._cookie.get('access_token'))
      this.token = this._cookie.get('access_token');
      
      return this.token;
    }



}
