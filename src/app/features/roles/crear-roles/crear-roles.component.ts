import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/core/services/notification.service';
import urlConstRouting from 'src/app/shared/constantes/url-const-routing';

@Component({
  selector: 'app-crear-roles',
  templateUrl: './crear-roles.component.html',
  styleUrls: ['./crear-roles.component.css']
})
export class CrearRolesComponent implements OnInit, OnDestroy {

  @Input() rolEdit!: any;

  form: FormGroup;
  isEdit: boolean = false;

  constructor(
    private readonly fb: FormBuilder,
    private readonly rt: Router,
    private readonly notificationService: NotificationService)
  {
    this.form = this.fb.group({
        nombre: ['', [Validators.required]],
        nombreCorto: ['', [Validators.required]],
        descripcion: ['', [Validators.required, Validators.minLength(8)]]
      });
  }



  ngOnInit() {
    if(this.rolEdit){
      this.isEdit = true;
    }
  }

  ngOnDestroy(): void {
    this.form.reset();
    this.rolEdit = null;
    this.isEdit = false;
  }

  clickRegresar(){
    const urlRol =urlConstRouting.roles;
    this.rt.navigate([urlRol.base, urlRol.lista]);
  }
}
