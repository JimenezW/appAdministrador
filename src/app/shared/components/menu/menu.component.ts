import { Component, Inject, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { MenuItem } from './menu.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnChanges, OnDestroy {

  @Input() menuOptions: MenuItem[] = [];

  constructor(
    private router: Router
  ) { }

  ngOnDestroy(): void {

  }
  ngOnChanges(changes: SimpleChanges): void {

  }

  ngOnInit(): void {

  }

  navigate(route?: string): void {
    if (route) this.router.navigate([route]);
  }

}
