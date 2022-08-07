import { Component, OnInit } from '@angular/core';
import { color, Heroe } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-organize',
  templateUrl: './organize.component.html',
  styles: [],
})
export class OrganizeComponent implements OnInit {
  // my pipes
  isCaps: boolean = true;
  nameColum: string = '';

  heroes: Heroe[] = [
    { name: 'BatMan', fly: false, color: color.black },
    { name: 'SuperMan', fly: true, color: color.red },
    { name: 'WonderWoman', fly: true, color: color.red },
    { name: 'LightGreen', fly: true, color: color.green },
    { name: 'Robin', fly: false, color: color.green },
  ];

  constructor() {}

  ngOnInit(): void {}

  toggleCaps() {
    this.isCaps = !this.isCaps;
  }

  sortBy(colum: string = '') {
    this.nameColum = colum;
  }
}
