import { NgModule } from '@angular/core';
// primeng
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { FieldsetModule } from 'primeng/fieldset';
// ---------

@NgModule({
  declarations: [],
  imports: [
    ButtonModule,
    CardModule,
    MenubarModule,
    InputTextModule,
    FieldsetModule,
  ],
  exports: [
    ButtonModule,
    CardModule,
    MenubarModule,
    InputTextModule,
    FieldsetModule,
  ],
})
export class PrimengModule {}
