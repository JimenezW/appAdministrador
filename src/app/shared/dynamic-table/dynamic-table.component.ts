import { Component, Input, Output, EventEmitter, OnInit, ViewChild, AfterViewInit, OnChanges, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ColumnDefinition, GridOptions, ActionEvent } from './dynamic-table.models';
import { GridConfiguracion } from './GridConfiguracion';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss']
})
export class DynamicTableComponent implements OnInit, AfterViewInit, OnChanges {

  @Input() gridConfig!: GridConfiguracion;

  @Output() action: EventEmitter<ActionEvent> = new EventEmitter<ActionEvent>();
  @Output() pageChange: EventEmitter<PageEvent> = new EventEmitter<PageEvent>();
  @Output() sortChange: EventEmitter<Sort> = new EventEmitter<Sort>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  displayedColumns: string[] = [];

  constructor(private cdRef: ChangeDetectorRef) { }


  // 🔹 Inicialización de columnas y datasource
  ngOnInit(): void {
    if (!this.gridConfig) return;
    this.displayedColumns = [...this.gridConfig.columns.map(c => c.id)];
    this.dataSource.data = this.gridConfig.data ?? [];

    // 👉 Exponer referencia pública al componente
    this.gridConfig.component = this;
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    if (this.gridConfig.options?.pagination) {
      this.syncPaginatorValues();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['gridConfig'] && this.gridConfig) {
      this.dataSource.data = this.gridConfig.data ?? [];
      this.syncPaginatorValues();
    }
  }

    // 🔹 Sincroniza los valores de paginación
  private syncPaginatorValues(): void {
    if (!this.paginator || !this.gridConfig.options?.pagination) return;

    const { totalItems = 0, pageSize = 5, pageSizeOptions = [5, 10, 20] } = this.gridConfig.options.pagination;
    this.paginator.length = totalItems;
    this.paginator.pageSize = pageSize;
    this.paginator.pageSizeOptions = pageSizeOptions;
    this.cdRef.detectChanges();
  }

  onActionClick(action: string, rowData: any): void {
    this.action.emit({ action, rowData });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onVirtualPage(event: PageEvent): void {
    // Simplemente recalcula los datos locales (sin emitir evento)
    this.paginator.pageIndex = event.pageIndex;
    const total = this.gridConfig.options.pagination.totalItems;
    const startIndex = this.paginator.pageIndex * this.gridConfig.options.pagination.pageSize;
    const endIndex = startIndex + this.gridConfig.options.pagination.pageSize;
    if(this.gridConfig.data){
      this.dataSource.data = this.gridConfig.data.slice(startIndex, endIndex);
    }
  }


    // ============================================================
  // 🔸 MÉTODOS PÚBLICOS ACCESIBLES DESDE gridConfig.component
  // ============================================================

  /** Limpia el filtro y reinicia la paginación */
  public limpiar(): void {
    this.dataSource.filter = '';
    if (this.paginator) this.paginator.firstPage();
  }

  /** Actualiza los datos del grid */
  public actualizarDatos(nuevaData: any[]): void {
    this.dataSource.data = nuevaData;
    this.gridConfig.data = nuevaData;
  }

  /** Refresca completamente la vista del grid */
  public recargar(): void {
    this.dataSource._updateChangeSubscription();
    this.cdRef.detectChanges();
  }
}
