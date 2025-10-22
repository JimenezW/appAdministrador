import { Component, OnInit } from '@angular/core';
import { GridUserRolConfig } from './grid-user-rol.config';
import { ActionEvent } from 'src/app/shared/components/dynamic-table/dynamic-table.models';
import { PageEvent } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';
import { UsuariosService } from 'src/app/core/services/usuarios.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-asignar-rol',
  templateUrl: './asignar-rol.component.html',
  styleUrls: ['./asignar-rol.component.css']
})
export class AsignarRolComponent implements OnInit {

  gridUserRol = new GridUserRolConfig();

  constructor(
    private readonly usuarioService : UsuariosService,
    private readonly dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  getData(page = 0, size = 5, sort = 'fechaRegistro,desc'){
      const parms = { esPaginado: true, pagina: page, items: size, estado: true, sort };

      this.usuarioService.getPagination(parms)
        .subscribe({
        next: (response: any) => {

          this.gridUserRol.cargarDatos(response.data);
          this.gridUserRol.setPagination(response.pagina, response.items, response.total);
          this.gridUserRol.recargar();

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
      const size = this.gridUserRol.options.pagination.pageSize;
      const page = this.gridUserRol.options.pagination.page;
      this.getData(page, size, sort);
    }

    btnAgregar(){

    }

}
