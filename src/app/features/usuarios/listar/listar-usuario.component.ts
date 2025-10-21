import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';
import * as moment from 'moment';
import { UsuariosService } from 'src/app/core/services/usuarios.service';
import { ActionEvent, ColumnDefinition, GridOptions } from 'src/app/shared/components/dynamic-table/dynamic-table.models';
import { GridUsuariosConfig } from './grid-usuario.config';
import urlConstRouting from 'src/app/shared/constantes/url-const-routing';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-usuario.component',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.scss']
})
export class ListarUsuarioComponent implements OnInit {


  gridUser = new GridUsuariosConfig();

  constructor(private usuarioService : UsuariosService,
    private readonly rt : Router
  ){}

  ngOnInit(): void {
    this.getData();
  }

  getData(page = 0, size = 5, sort = 'fechaRegistro,desc'){
    const parms = { esPaginado: true, pagina: page, items: size, estado: true, sort };

    this.usuarioService.getPagination(parms)
      .subscribe({
      next: (response: any) => {

        this.gridUser.cargarDatos(response.data);
        this.gridUser.setPagination(response.pagina, response.items, response.total);
        this.gridUser.recargar();

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
    this.getData(event.pageIndex, event.pageSize);
  }

  handleSortEvent(event: Sort): void {
    const sort = `${event.active},${event.direction}`;
    const size = this.gridUser.options.pagination.pageSize;
    const page = this.gridUser.options.pagination.page;
    this.getData(page, size, sort);
  }

  crear(){
    const urlRol =urlConstRouting.usuarios;
    this.rt.navigate([urlRol.base, urlRol.crear]);
  }
}
