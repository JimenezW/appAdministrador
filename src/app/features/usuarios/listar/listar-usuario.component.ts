import { Component, OnInit } from '@angular/core';
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
        pageSizeOptions: [5, 10, 20]
      }
    };

  constructor(private usuarioService : UsuariosService){}

  ngOnInit(): void {
    this.getData();
  }



  getData(pagina = 0, items = 10, estado = true, sort = 'fechaCreacion,desc', esPaginado = true){
    const parms = { esPaginado, pagina, items, estado, sort };

    this.usuarioService.getPagination(parms)
      .subscribe({
      next: (response: any) => {
        let res = response;
        this.users = res.data;
        // this.gridOptions.pagination?.pageSize = res.items;
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

}
