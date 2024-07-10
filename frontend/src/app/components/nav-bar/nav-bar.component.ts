import { Component, OnInit } from '@angular/core';
import { MenuItem, ConfirmationService } from 'primeng/api';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  providers: [ConfirmationService],
})
export class NavBarComponent implements OnInit {
  items: MenuItem[] = [];
  isLoggedIn: boolean = false;

  constructor(
    private confirmationService: ConfirmationService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.authService.isLoggedIn.subscribe((loggedIn) => {
      this.isLoggedIn = loggedIn;
      this.updateMenuItems();
    });
  }

  updateMenuItems() {
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
        visible: this.isLoggedIn,
      },
      {
        label: 'Evenement',
        icon: 'pi pi-fw pi-file',
        routerLink: '/evenement',
        visible: this.isLoggedIn,
      },
      {
        label: 'Club',
        icon: 'pi pi-fw pi-users',
        routerLink: '/club',
        visible: this.isLoggedIn,
      },
      {
        label: 'Contact',
        icon: 'pi pi-fw pi-envelope',
        routerLink: '/contact',
      },
    ];

    if (this.isLoggedIn) {
      this.items.push({
        label: 'Logout',
        icon: 'pi pi-fw pi-sign-out',
        command: () => this.logout(),
        styleClass: 'right-aligned-item login-item',
      });
    } else {
      this.items.push({
        label: 'Login',
        icon: 'pi pi-fw pi-user',
        command: () => this.router.navigate(['/login']),
        styleClass: 'right-aligned-item login-item',
      });
    }
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
