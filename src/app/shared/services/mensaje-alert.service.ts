import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { MensajeAlertComponent, DialogData } from '../components/mensaje-alert/mensaje-alert.component';

@Injectable({
  providedIn: 'root'
})
export class MensajeAlertService {

  constructor(private dialog: MatDialog) { }

  private openDialog(data: DialogData): Observable<boolean> {
    const dialogRef = this.dialog.open(MensajeAlertComponent, {
      width: '400px',
      data: data,
      disableClose: true // Evita que el diálogo se cierre al hacer clic fuera
    });

    return dialogRef.afterClosed();
  }

  showSuccess(message: string, title: string = 'Éxito'): Observable<boolean> {
    return this.openDialog({ type: 'success', title, message });
  }

  showError(message: string, title: string = 'Error'): Observable<boolean> {
    return this.openDialog({ type: 'error', title, message });
  }

  showWarn(message: string, title: string = 'Advertencia'): Observable<boolean> {
    return this.openDialog({ type: 'warn', title, message });
  }

  showInfo(message: string, title: string = 'Información'): Observable<boolean> {
    return this.openDialog({ type: 'info', title, message });
  }

  showConfirm(title: string, message: string): Observable<boolean> {
    return this.openDialog({ type: 'confirm', title, message });
  }
}
