import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  public menuItems: MenuItem[] = [];

  constructor(
    private router:Router
  ){}
  ngOnInit() {
    this.menuItems = [
      {
        label: 'Pipes de Angular',
        icon: 'pi pi-desktop',
        items:[
          {
            label: 'Textos y fechas',
            icon: 'pi pi-align-left',
            routerLink: '/'
          },
          {
            label: 'Números',
            icon: 'pi pi-dollar',
            routerLink: 'numbers'
          },
          {
            label: 'No comunes',
            icon: 'pi pi-globe',
            routerLink: 'uncommon'
          }
        ]
      },
      {
        label: 'Pipes perzonalizados',
        icon:'pi pi-spin pi-cog',
        items:[
          {
            label: 'Otro elemento',
            icon:'pi pi-cog',
            routerLink: 'custom'
          }
        ]
      }
    ];
  }
}
