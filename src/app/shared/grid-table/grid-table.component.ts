import { AfterContentInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { GridConfiguracion } from './grid-configuracion';

@Component({
  selector: 'app-grid-table',
  templateUrl: './grid-table.component.html',
  styleUrls:['./grid-table.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GridTableComponent implements OnInit, AfterContentInit, OnChanges {

  @Input()
  configuracion: GridConfiguracion = new GridConfiguracion();

  @Output()
  clickCelda: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  clickCeldaElement: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  siguiente: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  atras: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  clickCeldaLink: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  ordenar: EventEmitter<any> = new EventEmitter<any>();

  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  displayedColumns: string[] = [];

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
   if(changes['data'] )
  }
  ngAfterContentInit(): void {

  }



}




