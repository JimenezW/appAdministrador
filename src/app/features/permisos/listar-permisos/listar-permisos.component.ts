import { Component, OnInit } from '@angular/core';
import { PermisosService } from 'src/app/core/services/permisos.service';
import { GridPermisosConfig } from './grid-permisos.config';
import { PageEvent } from '@angular/material/paginator';
import { ActionEvent } from 'src/app/shared/dynamic-table/dynamic-table.models';
import { Sort } from '@angular/material/sort';

@Component({
  selector: 'app-listar-permisos',
  templateUrl: './listar-permisos.component.html',
  styleUrls: ['./listar-permisos.component.css']
})
export class ListarPermisosComponent implements OnInit {
  gridPermisos = new GridPermisosConfig();

  constructor(private readonly permisoService : PermisosService) { }

  ngOnInit() {
    this.cargarDatos();
  }

  private cargarDatos(page = 0, size = 5, sort = 'fechaRegistro,desc'){
    const parms = { esPaginado: true, pagina: page, items: size, estado: true, sort };

    this.permisoService.getAll({}).subscribe({
      next: (response: any) => {

        this.gridPermisos.cargarDatos(response);
        //this.gridUser.setPagination(response.pagina, response.items, response.total);
        this.gridPermisos.recargar();

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
    const size = this.gridPermisos.options.pagination.pageSize;
    const page = this.gridPermisos.options.pagination.page;
    this.cargarDatos(page, size, sort);
  }

}
