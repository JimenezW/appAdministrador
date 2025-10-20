import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  type: 'success' | 'error' | 'warn' | 'info' | 'confirm';
  title: string;
  message: string;
}

@Component({
  selector: 'app-mensaje-alert',
  templateUrl: './mensaje-alert.component.html',
  styleUrls: ['./mensaje-alert.component.scss']
})
export class MensajeAlertComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<MensajeAlertComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  ngOnInit(): void {
  }

  onConfirm(): void {
    this.dialogRef.close(true);
  }

  onDismiss(): void {
    this.dialogRef.close(false);
  }
}