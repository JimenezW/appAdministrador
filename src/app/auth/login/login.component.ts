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
    Password: ['', [Validators.required, Validators.minLength(4)]]
  });

  ngOnInit() {

  }

  onLogin() {

    if (!this.loginForm.valid) {
      return;
    }
    this.loading = true;

    const data ={
      email: this.loginForm.controls['UserName'].value,
      password: this.loginForm.controls['Password'].value
    };

    this._autService.login(data).subscribe((response : any)=>{
      let res = response.body;
      if(res != undefined && res.accessToken != undefined && res.accessToken  != null && res.accessToken != ''){
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
