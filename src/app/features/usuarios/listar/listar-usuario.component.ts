import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';
import * as moment from 'moment';
import { UsuariosService } from 'src/app/core/services/usuarios.service';
import { ActionEvent, ColumnDefinition, GridOptions } from 'src/app/shared/dynamic-table/dynamic-table.models';

@Component({
  selector: 'app-listar-usuario.component',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.scss']
})
export class ListarUsuarioComponent implements OnInit {

  users = [];

    columns: ColumnDefinition[] = [
      { id: 'nombreCompleto', title: 'Nombre', sortable: true },
      { id: 'correo', title: 'Correo Electrónico' },
      { id: 'fechaRegistro', title: 'Fecha de Registro', format: 'date', sortable: true }
    ];

    gridOptions: GridOptions = {
      sorting: true,
      filtering: true,
      pagination: {
        pageSize: 5,
        pageSizeOptions: [5, 10, 20],
        totalItems: 0
      }
    };

  constructor(private usuarioService : UsuariosService){}

  ngOnInit(): void {
    this.getData();
  }

  getData(page = 0, size = 5, sort = 'fechaRegistro,desc'){
    const parms = { esPaginado: true, pagina: page, items: size, estado: true, sort };

    this.usuarioService.getPagination(parms)
      .subscribe({
      next: (response: any) => {
        this.users = response.data;
        if (this.gridOptions.pagination) {
          this.gridOptions.pagination.totalItems = response.totalItems;
        }
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
    if (this.gridOptions.pagination) {
      this.gridOptions.pagination.pageSize = event.pageSize;
    }
    this.getData(event.pageIndex, event.pageSize);
  }

  handleSortEvent(event: Sort): void {
    const sort = `${event.active},${event.direction}`;
    this.getData(0, this.gridOptions.pagination?.pageSize, sort);
  }
}
