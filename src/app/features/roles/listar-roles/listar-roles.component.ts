import { Component, OnInit } from '@angular/core';
import { GridRolesConfig } from './grid-roles.config';
import { ActionEvent } from 'src/app/shared/dynamic-table/dynamic-table.models';
import { PageEvent } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';
import { RolesService } from 'src/app/core/services/roles.service';

@Component({
  selector: 'app-listar-roles',
  templateUrl: './listar-roles.component.html',
  styleUrls: ['./listar-roles.component.css']
})
export class ListarRolesComponent implements OnInit {

  gridRoles = new GridRolesConfig();

  constructor(private readonly roleService : RolesService) { }

  ngOnInit() {
    this.cargarDatos();
  }

  private cargarDatos(page = 0, size = 5, sort = 'fechaRegistro,desc'){
    const parms = { esPaginado: true, pagina: page, items: size, estado: true, sort };

    this.roleService.getAll({}).subscribe({
      next: (response: any) => {

        this.gridRoles.cargarDatos(response);
        this.gridRoles.recargar();

      },
      error: (err) => {
        //this.notificationService.openSnackBar(er.error);
      },
      complete: () => {
        //this.loading = false;
      }
    });
  }

  handleActionEvent(event: ActionEvent): void {
    alert(`Acción: ${event.action}\nFila: ${JSON.stringify(event.rowData)}`);
  }

  handlePageEvent(event: PageEvent): void {
    this.cargarDatos(event.pageIndex, event.pageSize);
  }

  handleSortEvent(event: Sort): void {
    const sort = `${event.active},${event.direction}`;
    const size = this.gridRoles.options.pagination.pageSize;
    const page = this.gridRoles.options.pagination.page;
    this.cargarDatos(page, size, sort);
  }

}
