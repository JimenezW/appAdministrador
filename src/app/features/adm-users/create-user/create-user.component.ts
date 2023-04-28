import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
    isEdit = false;
    userForm : FormGroup;

    constructor(
    private dialogRef:MatDialogRef<CreateUserComponent>,
    @ Inject(MAT_DIALOG_DATA) public data: any,
    private fb : FormBuilder){
      this.userForm = this.fb.group({
        UserName:[''],
        FirstName: [''],
        LastName: [''],
        Email: ['', [Validators.email]]
      });
    }

    


    ngOnInit(): void {
      if(this.data != undefined && this.data != null && this.data != null)
      this.isEdit = true;
      
    }

    

    close(){
      this.dialogRef.close();
    }

}
