import { DynamicTableComponent } from "src/app/shared/dynamic-table/dynamic-table.component";
import { ColumnDefinition, RowConfiguracion, GridOptions } from "src/app/shared/dynamic-table/dynamic-table.models";
import { GridConfiguracion } from "src/app/shared/dynamic-table/GridConfiguracion";

export class GridUsuariosConfig implements GridConfiguracion {
  component?: DynamicTableComponent | undefined;
  //data: any[] =[];
  columns: ColumnDefinition[] =
    [
      {
        id: 'nombreCompleto',
        title: 'Nombre',
        sortable: true ,
        filter:true,
        format:'text'
      },
      {
        id: 'correo',
        title: 'Correo Electrónico',
        format: 'text',
        filter: false,
        sortable:false
      },
      {
        id: 'fechaRegistro',
        title: 'Fecha de Registro',
        format: 'date',
        sortable: true,
        filter: false
      }
    ];
  rowconfig?: RowConfiguracion[] | undefined;
  options: GridOptions = {
      sorting: true,
      filtering: true,
      pagination: {
        page: 0,
        pageSize: 5,
        pageSizeOptions: [5, 10, 20],
        totalItems: 0
      }
  };

  setPagination(page : number, pageSize : number, totalItems: number){
    this.options.pagination.pageSize = pageSize;
    this.options.pagination.page = page;
    this.options.pagination.totalItems = totalItems;
  }

  cargarDatos(data=[]){
    this.component?.actualizarDatos(data);
  }

  limpiar(){
    this.component?.limpiar();
  }

  recargar(){
    this.component?.recargar();
  }
}
