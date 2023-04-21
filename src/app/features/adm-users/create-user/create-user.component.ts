import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent {

  constructor(private dialogRef:MatDialogRef<CreateUserComponent>,
    @ Inject(MAT_DIALOG_DATA) public data: any){}

    close(){
      this.dialogRef.close();
    }

}
