// Importation de MenuItem pour le modèle de menu
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
})
export class NavBarComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        routerLink: '/',
      },
      {
        label: 'Tournoi',
        icon: 'pi pi-fw pi-calendar',
        routerLink: '/tournoi',
      },
      {
        label: 'Evenement',
        icon: 'pi pi-fw pi-file',
        routerLink: '/evenement',
      },
      {
        label: 'Club',
        icon: 'pi pi-fw pi-users',
        routerLink: '/club',
      },
      {
        label: 'Contact',
        icon: 'pi pi-fw pi-envelope',
        routerLink: '/contact',
      },
      {
        label: 'Login',
        icon: 'pi pi-fw pi-user',
        routerLink: '/login',
        styleClass: 'login-item',
      },
    ];
  }
}
