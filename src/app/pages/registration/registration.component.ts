import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  name = new FormControl('', [Validators.required]);
  address = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  phone = new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(8)]);
  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  hide = true;

  constructor() { }

  ngOnInit() {
  }

  getErrorMessageName() {
    return this.name.hasError('required') ? 'Anda belum memasukkan Nama Sekolah.' : '';
  }

  getErrorMessageAddress() {
    return this.address.hasError('required') ? 'Anda belum memasukkan Alamat Sekolah.' : '';
  }

  getErrorMessageEmail() {
    return this.email.hasError('required') ? 'Anda belum memasukkan email.' : this.email.hasError('email') ? 'Masukkan Anda tidak sesuai dengan format email.' : '';
  }

  getErrorMessagePhone() {
    return this.phone.hasError('required') ? 'Anda belum memasukkan Nomor Telepon Sekolah.' : '';
  }

  getErrorMessageUsername() {
    return this.username.hasError('required') ? 'Anda belum memasukkan Username Sekolah.' : '';
  }

  getErrorMessagePassword() {
    return this.password.hasError('required') ? 'Anda belum memasukkan Password Sekolah.' : '';
  }

}
