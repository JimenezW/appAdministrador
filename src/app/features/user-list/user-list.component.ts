import { Component, OnInit } from '@angular/core';
import { ColumnDefinition, GridOptions, ActionEvent } from '../../shared/dynamic-table/dynamic-table.models';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users = [
    { id: 1, name: 'Juan Pérez', email: 'juan.perez@example.com', registrationDate: new Date('2023-01-15'), balance: 1250.75 },
    { id: 2, name: 'Ana Gómez', email: 'ana.gomez@example.com', registrationDate: new Date('2023-02-20'), balance: 890.50 },
    { id: 3, name: 'Carlos Sánchez', email: 'carlos.sanchez@example.com', registrationDate: new Date('2023-03-10'), balance: 4500.00 },
    { id: 4, name: 'Laura Fernández', email: 'laura.fernandez@example.com', registrationDate: new Date('2023-04-05'), balance: 210.20 }
  ];

  columns: ColumnDefinition[] = [
    { id: 'id', title: 'ID', sortable: true },
    { id: 'name', title: 'Nombre', sortable: true },
    { id: 'email', title: 'Correo Electrónico' },
    { id: 'registrationDate', title: 'Fecha de Registro', format: 'date', sortable: true },
    { id: 'balance', title: 'Saldo', format: 'currency' }
  ];

  gridOptions: GridOptions = {
    sorting: true,
    filtering: true,
    pagination: {
      pageSize: 5,
      pageSizeOptions: [5, 10, 20]
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

  handleActionEvent(event: ActionEvent): void {
    alert(`Acción: ${event.action}\nFila: ${JSON.stringify(event.rowData)}`);
  }
}