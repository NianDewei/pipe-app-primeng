import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { PrimengModule } from '../prime-ng/primeng.module';

@NgModule({
  declarations: [MenuBarComponent],
  imports: [CommonModule, PrimengModule],
  exports: [MenuBarComponent],
})
export class SharedModule {}
