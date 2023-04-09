import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/core/services/notification.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  hide: boolean = false;
  loading!: boolean;

  constructor(private fb: FormBuilder, 
    private _autService : UserService, 
    private _router : Router,
    private notificationService: NotificationService) {
  }

  
  loginForm: FormGroup = this.fb.group({
    UserName: ['', [Validators.required]],
    Password: ['', [Validators.required, Validators.minLength(6)]]
  });
  
  ngOnInit() {
   /* if(this._autService.isLoggedIn())
    this._autService.logout().subscribe(()=>{debugger
      this._router.navigateByUrl('/auth/login');
    });*/
  }

  onLogin() {
    
    if (!this.loginForm.valid) {
      return;
    }
    this.loading = true;
    let formData = new FormData();

    formData.append("UserName", this.loginForm.controls['UserName'].value);
    formData.append("Password", this.loginForm.controls['Password'].value); 

    this._autService.login(formData).subscribe((response : any)=>{
      let res = response.body;
      if(res != undefined && res.jwtToken != undefined && res.jwtToken  != null && res.jwtToken != ''){
        this._router.navigateByUrl('/home');
      }
    },(er)=>{
      this.notificationService.openSnackBar(er.error);
    },
      ()=>{this.loading = false;});
    
  }

  onRegister(){
    this._router.navigateByUrl('/register');
  }
}
