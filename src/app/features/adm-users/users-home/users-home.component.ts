import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, SortDirection } from '@angular/material/sort';
import {merge, Observable, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import { AdmUserService } from 'src/app/core/services/adm-user/adm-user.service';
import { UserI } from 'src/app/data/UserI.Interface';
import { CreateUserComponent } from '../create-user/create-user.component';

@Component({
  selector: 'app-users-home',
  templateUrl: './users-home.component.html',
  styleUrls: ['./users-home.component.scss']
})
export class UsersHomeComponent implements OnInit, AfterViewInit{

  @ViewChild(MatPaginator) paginator: any = MatPaginator;
  @ViewChild(MatSort) sort: any = MatSort;
 
  displayedColumns: String[] = ['number','fullName', 'email', 'telefono', 'acciones'];
  data: UserI[] = [];

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  constructor(private _httpClient: HttpClient, 
    private dialog:MatDialog,
    private _admiService : AdmUserService) {}

  ngAfterViewInit() {

    this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));
    //this.paginator._intl.itemsPerPageLabel = 'Items pro Seite';
    //this.paginator._intl.nextPageLabel = 'Nächste';
    //this.paginator._intl.previousPageLabel = 'Vorherige';

      merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this._admiService!.UserList(
            this.sort.active,
            this.sort.direction,
            this.paginator.pageIndex,
            this.paginator.pageSize
          ).pipe(catchError(() => observableOf(null)));
        }),
        map(data => {
          // Flip flag to show that loading has finished.
          this.isLoadingResults = false;
          this.isRateLimitReached = data === null;

          if (data === null) {
            return [];
          }

          this.resultsLength = 4;//data.total_count;

          return data.data;
        }),
      )
      .subscribe(data => (this.data = data));
  }

  ngOnInit(){}

  newUser(){
    const dialogRef = this.dialog.open(CreateUserComponent);

    dialogRef.afterClosed().subscribe((arg)=> {
      
    });
  }

  EditUser(){}
}

