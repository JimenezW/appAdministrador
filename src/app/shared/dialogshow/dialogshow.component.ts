import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogshow',
  templateUrl: './dialogshow.component.html',
  styleUrls: ['./dialogshow.component.scss']
})
export class DialogshowComponent {
 title : String = "";

  constructor(public dialogRef: MatDialogRef<DialogshowComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmDialogModel){

    }

    onConfirm(): void {
      this.dialogRef.close(true);
    }
  
    onDismiss(): void {
      this.dialogRef.close(false);
    }

}
export class ConfirmDialogModel {

  constructor(public title: string, public message: string) {
  }
}