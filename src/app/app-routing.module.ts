import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteGuard } from './guards/route.guard';

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
import { EditguruComponent } from './pages/admin/edit/editguru/editguru.component';
import { EditpesertaComponent } from './pages/admin/edit/editpeserta/editpeserta.component';
import { FinalisasiComponent } from './pages/admin/finalisasi/finalisasi.component';
import { EdittimComponent } from './pages/admin/edit/edittim/edittim.component';
import { HomepageComponent } from './pages/homepage/homepage.component';

const routes: Routes = [
  { path: '',
    redirectTo: 'homepage',
    pathMatch: 'full'
  },

  {
    path: 'homepage',
    component: HomepageComponent,
  },

  // Admin User
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
    canActivate: [RouteGuard],
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
      // {
      //   path: 'finalisasi',
      //   component: FinalisasiComponent,
      // },
      // {
      //   path: 'pembayaran',
      //   component: PembayaranComponent,
      // },
      {
        path: 'edit',
        children:[
          {
            path: 'editguru',
            component: EditguruComponent,
          },    
          {
            path: 'editpeserta',
            component: EditpesertaComponent,
          },    
          {
            path: 'edittim',
            component: EdittimComponent,
          },    
        ]
      },
    ]
  },
  {
    path: '**',
    redirectTo: 'homepage'
  },  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
