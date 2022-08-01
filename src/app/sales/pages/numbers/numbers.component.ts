import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styles: [],
})
export class NumbersComponent implements OnInit {
  netSales: number = 123456.5567;
  percentage: number = 0.18;

  constructor() {}

  ngOnInit(): void {}
}
