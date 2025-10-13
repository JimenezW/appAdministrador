/**
 * Define el formato de los datos que se mostrarán en una columna.
 */
export type ColumnFormat = 'text' | 'date' | 'currency';

/**
 * Define la estructura de una columna en la tabla dinámica.
 */
export interface ColumnDefinition {
  /** El identificador único de la columna, que debe coincidir con una propiedad del objeto de datos. */
  id: string;
  /** El título que se mostrará en la cabecera de la columna. */
  title: string;
  /** El formato en el que se deben mostrar los datos (opcional, por defecto 'text'). */
  format?: ColumnFormat;
  /** Indica si la columna se puede ordenar (opcional, por defecto false). */
  sortable?: boolean;
}

/**
 * Define las opciones de configuración para la tabla dinámica.
 */
export interface GridOptions {
  /** Configuración de la paginación (opcional). */
  pagination?: {
    pageSize: number;
    pageSizeOptions: number[];
  };
  /** Habilita el ordenamiento en las columnas marcadas como 'sortable' (opcional, por defecto false). */
  sorting?: boolean;
  /** Habilita el filtrado (opcional, por defecto false). */
  filtering?: boolean;
}

/**
 * Define la estructura del evento emitido para acciones en una fila.
 */
export interface ActionEvent {
  /** El tipo de acción a realizar ('edit' o 'delete'). */
  action: 'edit' | 'delete';
  /** Los datos de la fila sobre la que se realizó la acción. */
  rowData: any;
}