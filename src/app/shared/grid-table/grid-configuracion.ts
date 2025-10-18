import { GridTableComponent } from "./grid-table.component";


export class GridConfiguracion {

  component?: GridTableComponent;
  columnas?: ColumnaConfiguracion[] = [];
  datos?: object[] = [];
  /**
   * @description Titulo de la grid
   */
  titulo= '';
  /**
   * @description Activa scroll vertical de la grid
   */
  scrollHorizontal = false;
  /**
   * @description Activa scroll vertical de la grid
   */
  scrollVertical = false;
  /**
   * @description Muesta la paginacion de la grid
   */
  mostrarPaginador = true;
}

export class ColumnaConfiguracion {
  key?: string = '';
  titulo?: string = '';
  index?: number;
  isTrim?=false;
  configCelda?: ConfigCelda
}


export class ConfigCelda {
  tipo?: 'text' | 'date' | 'currency';
  cssKey?:'';
  cssButton?: '';
  tituloButton?:'';
  sortKey?:'';
  btnDisabled?:'';
}

export class Row {
  selected = false;
  _dato: any = {};
  desabilitar = false;

  constructor(){}
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
