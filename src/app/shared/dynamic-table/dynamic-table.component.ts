import { Component, Input, Output, EventEmitter, OnInit, ViewChild, AfterViewInit, OnChanges, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ColumnDefinition, GridOptions, ActionEvent } from './dynamic-table.models';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss']
})
export class DynamicTableComponent implements OnInit, AfterViewInit, OnChanges {

  @Input() data: any[] = [];
  @Input() columns: ColumnDefinition[] = [];
  @Input() options: GridOptions = {
      sorting: true,
      filtering: true,
      pagination: {
        pageSize: 5,
        pageSizeOptions: [5, 10, 20],
        totalItems: 0
      }
  };

  @Output() action: EventEmitter<ActionEvent> = new EventEmitter<ActionEvent>();
  @Output() pageChange: EventEmitter<PageEvent> = new EventEmitter<PageEvent>();
  @Output() sortChange: EventEmitter<Sort> = new EventEmitter<Sort>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  displayedColumns: string[] = [];

  constructor(private cdRef: ChangeDetectorRef) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] && this.data) {
      this.dataSource.data = this.data;
    }

    if (changes['options'] && this.options.pagination != undefined) {
      if (this.paginator) {
        this.paginator.length = this.options.pagination.totalItems;
        this.paginator.pageSize = this.options.pagination.pageSize;
        this.paginator.pageSizeOptions = this.options.pagination.pageSizeOptions;
      }

      // ⚡ Forzamos re-render del paginator
      this.cdRef.detectChanges();
    }
  }

  ngOnInit(): void {
    this.displayedColumns = [...this.columns.map(c => c.id), 'actions'];
    this.dataSource.data = this.data;

  }

  ngAfterViewInit(): void {
    //this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    // valores por defecto (garantiza que paginator siempre tenga algo)
    this.paginator.length = this.options.pagination.totalItems;
    this.paginator.pageSize = this.options.pagination.pageSize;
    this.paginator.pageSizeOptions = this.options.pagination.pageSizeOptions;
  }

  onActionClick(action: 'edit' | 'delete', rowData: any): void {
    this.action.emit({ action, rowData });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
