import { Component, OnInit } from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  items?: MenuItem[]

  ngOnInit() {
    this.items = [
      {
        label:'Connexion',
        icon: 'pi pi-user',
        to: '/login'
      },
      {
        label:'Administration',
        icon: 'pi pi-cog',
        to: '/admin'
      },
    ]
  }

}