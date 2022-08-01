import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uncommon',
  templateUrl: './uncommon.component.html',
  styles: [],
})
export class UncommonComponent implements OnInit {
  // i18nSelect
  name: string = 'Rolando';
  gender: string = 'M';

  inviteMap: { [k: string]: string } = {
    M: 'Mr',
    F: 'Mrs',
  };

  // i18nPlural
  clients: string[] = ['Pedro', 'Juan', 'Stall', 'Queen'];

  clientsMap: { [k: string]: string } = {
    '=0': "don't have a customer waiting.",
    '=1': 'have a client waiting.',
    other: 'have # clients waiting.',
    // other: 'have # clients waiting.',
  };

  constructor() {}

  ngOnInit(): void {}

  // methods
  changeName() {
    this.name = 'Roses';
    this.gender = 'F';
  }

  removeClient() {
    this.clients.splice(0, 1);
  }
}
