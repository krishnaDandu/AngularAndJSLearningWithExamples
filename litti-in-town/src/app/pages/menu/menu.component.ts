import { Component, OnInit } from '@angular/core';
import { menuInterface } from './InMenu';
import { littiMenu } from './menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  menuItems:any;
  constructor() {}

  ngOnInit(): void {
    this.menuItems= littiMenu;
  }
}
