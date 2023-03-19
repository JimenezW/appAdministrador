import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  hide: boolean = false;

  constructor(private fb: FormBuilder, private _autService : UserService) {
  }

  ngOnInit() {
  }

  loginForm: FormGroup = this.fb.group({
    UserName: ['', [Validators.required]],
    Password: ['', [Validators.required, Validators.minLength(6)]]
  })


  onLogin() {
    
    if (!this.loginForm.valid) {
      return;
    }

    let formData = new FormData();

    formData.append("UserName", this.loginForm.controls['UserName'].value);
    formData.append("Password", this.loginForm.controls['Password'].value); 

    this._autService.login(formData).subscribe(res=>{

    });
    
  }
}
