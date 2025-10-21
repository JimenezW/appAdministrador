import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/core/services/notification.service';
import { PermisosService } from 'src/app/core/services/permisos.service';
import urlConstRouting from 'src/app/shared/constantes/url-const-routing';
import { MensajeAlertService } from 'src/app/shared/services/mensaje-alert.service';

@Component({
  selector: 'app-crear-permiso',
  templateUrl: './crear-permiso.component.html',
  styleUrls: ['./crear-permiso.component.css']
})
export class CrearPermisoComponent implements OnInit, OnDestroy {

  @Input() rolEdit!: any;

  form!: FormGroup;
  isEdit: boolean = false;

  constructor(
    private readonly fb: FormBuilder,
    private readonly rt: Router,
    private readonly notificationService: NotificationService,
    private readonly permisoService: PermisosService,
    private readonly mensajeAler: MensajeAlertService
  ) {

  }

  ngOnInit() {
    this.form = this.fb.group({
      nombre: ['', [Validators.required]],
      nombreCorto: ['', [Validators.required]],
      descripcion: ['', [Validators.required, Validators.minLength(8)]]
    });

    if(this.rolEdit){
      this.isEdit = true;
    }
  }

  ngOnDestroy(): void {

  }

  clickRegresar(){
    const urlRol =urlConstRouting.permisos;
    this.rt.navigate([urlRol.base, urlRol.lista]);
  }

  clickCerrar(){
    this.clickRegresar();
  }

  clickCrear(){

    if(this.form.invalid){
      this.form.markAllAsTouched();
      return;
    }

    const values = this.form.value;

    this.permisoService.crear(values).subscribe({
      next: (response: any) => {
        if(response){
          this.mensajeAler.showSuccess("Guardado exitos")
            .subscribe(tem =>{
              this.clickRegresar();
            });
        }
      },
      error: (err) => {
        this.mensajeAler.showError(err.message)
        //this.notificationService.openSnackBar(er.error);
      }
    });


  }

}
