import { DynamicTableComponent } from "./dynamic-table.component";
import { ColumnDefinition, GridOptions, RowConfiguracion } from "./dynamic-table.models";


export interface GridConfiguracion {

  /** Referencia al componente dinámico (asignada automáticamente por el propio componente) */
  component?: DynamicTableComponent;

  /** Datos que se mostrarán en el grid */
  data?: any[];

  /** Definición de columnas del grid */
  columns: ColumnDefinition[];

  rowconfig?: RowConfiguracion[];

  /** Opciones generales del grid (paginación, filtros, ordenamiento, etc.) */
  options: GridOptions;

}
