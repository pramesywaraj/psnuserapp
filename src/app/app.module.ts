import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { MatDatepickerModule, MatNativeDateModule } from '@angular/material';
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
import { MatGridListModule } from '@angular/material';


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
import { HomepageComponent } from './pages/homepage/homepage.component';
import { HeaderHomepageComponent } from './components/header-homepage/header-homepage.component';
import { FooterHomepageComponent } from './components/footer-homepage/footer-homepage.component';
import { AboutComponent } from './components/about/about.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CompetitionComponent } from './components/competition/competition.component';
import { ContactComponent } from './components/contact/contact.component';
import { FaqComponent } from './components/faq/faq.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { OfferComponent } from './components/offer/offer.component';

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
    HomepageComponent,
    HeaderHomepageComponent,
    FooterHomepageComponent,
    AboutComponent,
    CarouselComponent,
    CompetitionComponent,
    ContactComponent,
    FaqComponent,
    GalleryComponent,
    OfferComponent,
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
    HttpClientModule,
    MatGridListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    // ScrollToModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
