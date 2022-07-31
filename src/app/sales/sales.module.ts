import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicComponent } from './pages/basic/basic.component';
import { UncommonComponent } from './pages/uncommon/uncommon.component';
import { NumbersComponent } from './pages/numbers/numbers.component';
import { OrganizeComponent } from './pages/organize/organize.component';

@NgModule({
  declarations: [
    BasicComponent,
    UncommonComponent,
    NumbersComponent,
    OrganizeComponent,
  ],
  imports: [CommonModule],
  exports: [
    BasicComponent,
    UncommonComponent,
    NumbersComponent,
    OrganizeComponent,
  ],
})
export class SalesModule {}
