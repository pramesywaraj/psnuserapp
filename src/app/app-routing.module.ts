import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './pages/admin/admin.component';
import { LoginComponent } from './pages/login/login.component';
import { BerandaComponent } from './pages/admin/beranda/beranda.component';
import { DaftarpesertaComponent } from './pages/admin/daftarpeserta/daftarpeserta.component';
import { DaftarlombaComponent } from './pages/admin/daftarlomba/daftarlomba.component';
import { FinalisasiComponent } from './pages/admin/finalisasi/finalisasi.component';
import { PembayaranComponent } from './pages/admin/pembayaran/pembayaran.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'admin',
    component: AdminComponent,

    children: [
      {
        path: 'beranda',
        component: BerandaComponent,
      },
      {
        path: 'daftarpeserta',
        component: DaftarpesertaComponent,
      },
      {
        path: 'daftarlomba',
        component: DaftarlombaComponent,
      },
      {
        path: 'finalisasi',
        component: FinalisasiComponent,
      },
      {
        path: 'pembayaran',
        component: PembayaranComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
