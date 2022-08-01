import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uncommon',
  templateUrl: './uncommon.component.html',
  styles: [],
})
export class UncommonComponent implements OnInit {
  name: string = 'Rolando';
  gender: string = 'M';

  inviteMap = {
    M: 'Mr',
    F: 'Mrs',
  };

  constructor() {}

  ngOnInit(): void {}
}
