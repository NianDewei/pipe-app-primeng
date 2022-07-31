import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  constructor(private primengConfig: PrimeNGConfig) {}

  title = 'pipe-app';
  name = 'gilver rolando';
  value = 1000;
  obj = { name: 'Rolando' };

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  getName() {
    console.log(this.name);
  }
}
