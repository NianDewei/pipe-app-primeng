import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// my pages
import { BasicComponent } from './sales/pages/basic/basic.component';
import { NumbersComponent } from './sales/pages/numbers/numbers.component';
import { OrganizeComponent } from './sales/pages/organize/organize.component';
import { UncommonComponent } from './sales/pages/uncommon/uncommon.component';

const routes: Routes = [
  {
    path: '',
    component: BasicComponent,
    pathMatch: 'full',
  },
  {
    path: 'numbers',
    component: NumbersComponent,
  },
  {
    path: 'uncommons',
    component: UncommonComponent,
  },
  {
    path: 'organize',
    component: OrganizeComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRouterModule {}
