import { NgModule } from '@angular/core';
// primeng
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
// ---------

@NgModule({
  declarations: [],
  imports: [ButtonModule, CardModule, MenubarModule, InputTextModule],
  exports: [ButtonModule, CardModule, MenubarModule, InputTextModule],
})
export class PrimengModule {}
