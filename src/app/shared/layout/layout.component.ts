import { MediaMatcher } from '@angular/cdk/layout';
import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import urlConstRouting from 'src/app/shared/constantes/url-const-routing';
import { SpinnerService } from 'src/app/core/services/spinner.service';
import { UserService } from 'src/app/core/services/user.service';
import { MenuItem } from '../components/menu/menu.model';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent  implements OnInit, OnDestroy, AfterViewInit {

  private _mobileQueryListener: () => void;
  mobileQuery: MediaQueryList;
  showSpinner: boolean = false;
  userName: string = "";
  isAdmin: boolean = false;

  url = urlConstRouting;

  // menu.config.ts
  MENU_ITEMS: MenuItem[] = [
    {
    title: 'Home',
    icon: 'home',
    route: '',
    typeAccion: 'NA'
    },
    {
      title: 'Dashboard',
      icon: 'dashboard',
      route: '/dashboard',
      typeAccion : 'link'
    },
    {
      title: 'Usuarios',
      icon: 'groups',
      typeAccion: 'NA',
      children: [
        {
          title: 'Lista',
          icon: 'person',
          route: '/usuarios',
          typeAccion: 'link' },
        {
          title: 'Asig. permiso',
          icon: 'security',
          route: '/usuarios/asig-permiso',
          typeAccion: 'link' },
        {
          title: 'Asig. roles',
          icon: 'lock',
          route: '/usuarios/asig-rol',
          typeAccion:'link' }
      ]
    },
    {
      title: 'Clientes',
      icon: 'groups',
      typeAccion: 'NA',
      children: [
        {
          title: 'Lista',
          icon: 'person',
          route: '/cliente',
          typeAccion:'link' },
        {
          title: 'Asig. usuario',
          icon: 'security',
          route: '/cliente/asig-user',
          typeAccion:'link'
        }
      ]
    },
    {
      title: 'Catálogos',
      icon: 'folder',
      typeAccion: 'NA',
      children: [
        {
          title: 'Roles',
          icon: 'security',
          route: '/roles',
          typeAccion: 'link'
        },
        {
          title: 'Permisos',
          icon: 'lock',
          route: '/permisos',
          typeAccion: 'link'
        },
        {
          title: 'Icons',
          icon: 'person',
          route: '/icons',
          typeAccion:'link'
        },
      ]
    },
    {
      title: 'Reportes',
      icon: 'bar_chart',
      route: '/reportes',
      typeAccion: 'link'
    },
    {
      title: 'Salir',
      icon: 'logout',
      route: '/reportes',
      typeAccion: 'link'
    }
  ];


  private autoLogoutSubscription: Subscription = new Subscription;

  constructor(private changeDetectorRef: ChangeDetectorRef,
      private media: MediaMatcher,
      public spinnerService: SpinnerService,
      private authService: UserService) {

      this.mobileQuery = this.media.matchMedia('(max-width: 1000px)');
      this._mobileQueryListener = () => changeDetectorRef.detectChanges();
      // tslint:disable-next-line: deprecation
      this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
    //const user = this.authService.getCurrentUser();

    //this.isAdmin = user.isAdmin;
    //this.userName = user.fullName;

  }

  ngOnDestroy(): void {
      // tslint:disable-next-line: deprecation
      this.mobileQuery.removeListener(this._mobileQueryListener);
      this.autoLogoutSubscription.unsubscribe();
  }

  ngAfterViewInit(): void {
      this.changeDetectorRef.detectChanges();
  }

  logout(){
    this.authService.logout().subscribe();
  }
}
