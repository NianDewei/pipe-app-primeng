import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.sass'],
})
export class MenuBarComponent implements OnInit {
  items: MenuItem[] = [];

  constructor() {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'Pipe of Angular',
        icon: 'pi pi-fw pi-desktop',
        items: [
          {
            label: 'Documentation',
            icon: 'pi pi-fw pi-book',
            url: 'https://angular.io/api?type=pipe',
          },
          {
            label: 'Text and Date',
            icon: 'pi pi-fw pi-align-left',
            routerLink: '/',
          },
          {
            label: 'Numbers',
            icon: 'pi pi-fw pi-dollar',
            routerLink: 'numbers',
          },
          {
            label: 'Uncommons',
            icon: 'pi pi-fw pi-globe',
            routerLink: 'uncommons',
          },
        ],
      },
      {
        label: 'Custom Pipes',
        icon: 'pi pi-fw pi-cog',
        routerLink: 'organize',
      },
    ];
  }
}
