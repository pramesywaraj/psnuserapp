import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material';


import { HeaderComponent } from './components/header/header.component';
import { AdminComponent } from './pages/admin/admin.component';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { LoginComponent } from './pages/login/login.component';
import { BerandaComponent } from './pages/admin/beranda/beranda.component';
import { DaftarpesertaComponent } from './pages/admin/daftarpeserta/daftarpeserta.component';
import { DaftarlombaComponent } from './pages/admin/daftarlomba/daftarlomba.component';
import { FinalisasiComponent } from './pages/admin/finalisasi/finalisasi.component';
import { PembayaranComponent } from './pages/admin/pembayaran/pembayaran.component';
import { PenginapanComponent } from './pages/admin/penginapan/penginapan.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { DaftarguruComponent } from './pages/admin/daftarguru/daftarguru.component';
import { DaftartimComponent } from './pages/admin/daftartim/daftartim.component';
import { EditguruComponent } from './pages/admin/edit/editguru/editguru.component';
import { EditpesertaComponent } from './pages/admin/edit/editpeserta/editpeserta.component';
import { EdittimComponent } from './pages/admin/edit/edittim/edittim.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdminComponent,
    SidemenuComponent,
    LoginComponent,
    BerandaComponent,
    DaftarpesertaComponent,
    DaftarlombaComponent,
    FinalisasiComponent,
    PembayaranComponent,
    PenginapanComponent,
    RegistrationComponent,
    DaftarguruComponent,
    DaftartimComponent,
    EditguruComponent,
    EditpesertaComponent,
    EdittimComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatTableModule,
    MatSelectModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
