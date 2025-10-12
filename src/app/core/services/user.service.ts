import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, catchError, Observable, of, tap } from 'rxjs';
import { UserI } from 'src/app/data/UserI.Interface';
import { JwtResponseI } from 'src/app/data/JwtResponseI.Interface';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  autSubject = new BehaviorSubject(false);
  private token: string = "";

  constructor(private _http:HttpClient,
    private _cookie : CookieService,
    private jwtHelper: JwtHelperService,
    private _router : Router) { }

    register(user:any):Observable<JwtResponseI>{

      return this._http.post<JwtResponseI>(`/api/register`,user).pipe(tap((res:JwtResponseI)=>{
        if(res){
          //guardar token
          this.saveToken(res.jwtToken,res.expireAt);
        }
      })
      );


    }

    login(user:any):Observable<JwtResponseI>{
      return this._http.post<any>(`/api/auth/login`,user,{
        observe: 'response',
      }).pipe(tap((res:any)=>{

        if(res && res?.body?.ok){


          let body = res.body.data;
          //guardar token
          this.saveToken(body.accessToken,body.expireAt);

          let user = {
            id : 'sad',
            fullName: body.username,
            expireAt : body.expireAt
          };
          this.saveUser(user);

        }
      }),catchError((err)=>{
        return of(err);
      })
      );
    }

    logout():Observable<any>{

      return this._http.post<JwtResponseI>(`${environment.apiUrl}/api/login/revoke-token`,null).pipe(tap((res:JwtResponseI)=>{
        this.token='';
        this._cookie.deleteAll();
        this._router.navigateByUrl('/auth/login');

      }),catchError((err)=>{
        return of(err);
      })
      );

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

      //let cookies = this._cookie.getAll();


      if(this._cookie.get('access_token'))
      this.token = this._cookie.get('access_token');

      if(this.token == "")
      this._cookie.deleteAll();

      return this.token;
    }

    private saveUser(data : any){
      this._cookie.set("currentUser", JSON.stringify(data));
    }

    getCurrentUser(): UserI{
      let userData : UserI = JSON.parse(this._cookie.get("currentUser"));


      return userData;
    }


}
