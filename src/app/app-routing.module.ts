import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccountComponent } from './shared/pages/account/account.component';
import { CanActiveGuard } from './shared/guards/can-active.guard';
import { CanDeactiveGuard } from './shared/guards/can-deactive.guard';
import { HomeComponent } from './shared/pages/home/home.component';
import { CanLoadGuard } from './shared/guards/can-load.guard';
import { CanActivatedChildGuard } from './shared/guards/can-activated-child.guard';

const routes: Routes = [{
  path: '',
  component: HomeComponent
},
{
  path: 'account',
  component: AccountComponent,
  canActivate: [CanActiveGuard],
  canDeactivate: [CanDeactiveGuard]
},
{
  path: 'core',
  loadChildren: () => import('./core/core.module').then((m) => m.CoreModule),
  canLoad: [CanLoadGuard],
  canActivateChild: [CanActivatedChildGuard]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
