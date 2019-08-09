import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { RegistrationService } from 'src/app/services/registration.service';

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

  schoolRegistration : FormGroup;

  private subscription: Subscription;

  constructor(private formBuilder: FormBuilder, public RegistrationService: RegistrationService,  public router: Router) {
    this.schoolRegistration = formBuilder.group(
      {
        'name' : this.name,
        'address': this.address,
        'email' : this.email,
        'phone' : this.phone,
        'username' : this.username,
        'password' : this.password,
      }
    );
   }

  ngOnInit() {
  }

  postSchoolRegistration() {
    this.subscription = this.RegistrationService.postSchoolRegistration(this.schoolRegistration.value).subscribe((data) => {
      if (data.status === 201) {
        alert("Pendaftaran berhasil");
      }
      this.router.navigate(['/login']);
    },
    err => {
      console.log('err', err);
      if (err.status === 500){
        alert("Email atau username sudah terdaftar");
      }
      else if (err.status !== 500){
        alert("Data anda Salah");
      }
    })
  }  

  ngOnDestroy() {
    if(this.subscription) this.subscription.unsubscribe();
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
