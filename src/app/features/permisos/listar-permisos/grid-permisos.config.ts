import { DynamicTableComponent } from "src/app/shared/components/dynamic-table/dynamic-table.component";
import { ColumnDefinition, RowConfiguracion, GridOptions } from "src/app/shared/components/dynamic-table/dynamic-table.models";
import { GridConfiguracion } from "src/app/shared/components/dynamic-table/GridConfiguracion";

export class GridPermisosConfig implements GridConfiguracion {
  component?: DynamicTableComponent | undefined;
  //data: any[] =[];
  columns: ColumnDefinition[] =
    [
      {
        id: 'nombre',
        title: 'Nombre',
        sortable: true ,
        filter:true,
        format:'text'
      },
      {
        id: 'nombreCorto',
        title: 'Correo Electrónico',
        format: 'text',
        filter: false,
        sortable:false
      },
      {
        id:'descripcion',
        title:'Descripcion',
        format:'text',
        filter: false,
        sortable:false
      },
      {
        id: 'fechaModificacion',
        title: 'Fecha de modificacion',
        format: 'date',
        sortable: true,
        filter: false
      },
      {
        id: 'accion',
        title: 'Acciones',
        format: 'accion',
        sortable: false,
        filter: false
      }
    ];
  rowconfig?: RowConfiguracion[] = [
    {
      idColumn:'id',
      tipo: 'icon-btn',
      icon:'delete',
      totooltip:'eliminar',
      color: 'warn',
      activo: true,
      visible:true,
      esAccion: 'eliminar'
    },
    {
      idColumn:'id',
      tipo: 'icon-btn',
      icon:'edit',
      color: 'primary',
      totooltip:'editar',
      activo: true,
      visible:true,
      esAccion: 'editar'
    }
  ];
  options: GridOptions = {
      paginationVirtual:true,
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

    if(this.options.paginationVirtual){
      this.setPagination(0, 5, data.length);
    }
    this.component?.actualizarDatos(data);

  }

  limpiar(){
    this.component?.limpiar();
  }

  recargar(){
    this.component?.recargar();
  }
}
