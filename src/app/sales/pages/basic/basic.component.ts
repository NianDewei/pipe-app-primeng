import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styles: [],
})
export class BasicComponent implements OnInit {

  nameLower: string = 'rolando';
  nameUpper: string = 'ROLANDO';
  nameComplete: string = 'roLanDo oC';

  constructor() {}

  ngOnInit(): void {}
}
