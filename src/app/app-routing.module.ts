import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './pages/admin/admin.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/admin',
    pathMatch: 'full'
  },
  // {
  //   path: '/login',
  //   component: 
  // },
  {
    path: 'admin',
    component: AdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
