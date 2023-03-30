import { formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  registerForm : FormGroup = this.fb.group({
    UserName:[''],
    Password:[''],
    FirstName: [''],
    LastName: [''],
    Email: ['', [Validators.email]]
  });

  constructor(private fb: FormBuilder, private _autService : UserService, private _router : Router){}

  onRegister(){

    if(!this.registerForm.valid)
    return;

    let formData = new FormData();

    formData.append('Username',this.registerForm.controls["UserName"].value);
    formData.append('Password',this.registerForm.controls["Password"].value);
    formData.append('FirstName',this.registerForm.controls["FirstName"].value);
    formData.append('LastName',this.registerForm.controls["LastName"].value);
    formData.append('Email',this.registerForm.controls["Email"].value);

    this._autService.register(formData).subscribe((res)=> {
      this._router.navigateByUrl('/auth/login');
    });
  }
}
