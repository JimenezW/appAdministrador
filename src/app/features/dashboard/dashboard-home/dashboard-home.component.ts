import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss']
})
export class DashboardHomeComponent implements OnInit {
  
  currentUser: any;

  ngOnInit(): void {
    this.currentUser = {
      token: 'aisdnaksjdn,axmnczm',
      isAdmin: true,
      email: 'john.doe@gmail.com',
      id: '12312323232',
      alias: 'john.doe@gmail.com'.split('@')[0],
      expiration: moment().add(1, 'days').toDate(),
      fullName: 'John Doe'
  };
  }



}
