import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './pages/admin/admin.component';
import { LoginComponent } from './pages/login/login.component';
import { BerandaComponent } from './pages/admin/beranda/beranda.component';
import { DaftarpesertaComponent } from './pages/admin/daftarpeserta/daftarpeserta.component';
import { DaftarlombaComponent } from './pages/admin/daftarlomba/daftarlomba.component';
import { PembayaranComponent } from './pages/admin/pembayaran/pembayaran.component';
import { PenginapanComponent } from './pages/admin/penginapan/penginapan.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { DaftarguruComponent } from './pages/admin/daftarguru/daftarguru.component';
import { DaftartimComponent } from './pages/admin/daftartim/daftartim.component';

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
    path: 'registration',
    component: RegistrationComponent
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
        path: 'daftarguru',
        component: DaftarguruComponent,
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
        path: 'daftartim',
        component: DaftartimComponent,
      },
      {
        path: 'daftarpenginapan',
        component: PenginapanComponent,
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
