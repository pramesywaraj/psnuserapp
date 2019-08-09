import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { DaftarguruService } from 'src/app/services/daftarguru.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-daftarguru',
  templateUrl: './daftarguru.component.html',
  styleUrls: ['./daftarguru.component.scss']
})
export class DaftarguruComponent implements OnInit {

  name = new FormControl('', [Validators.required]);
  NIP = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  phone = new FormControl('', [Validators.required]);

  getAllGuru: [];
  daftarGuru: FormGroup;

  private subscription: Subscription;

  displayedColumns: string[] = ['indexNumber', 'name', 'NIP', 'email', 'phone', 'edit', 'delete'];

  constructor(private formBuilder: FormBuilder, public DaftarguruService: DaftarguruService, public router: Router) {
    const schoolId = JSON.parse(localStorage.getItem('schoolId'));
    this.getAllGuruBySchoolId(schoolId);
    this.daftarGuru = this.formBuilder.group(
      {
        name : this.name,
        NIP : this.NIP,
        email : this.email,
        phone : this.phone,
        school: schoolId,
      }
    );
  }

  ngOnInit() {
  }
  
  getAllGuruBySchoolId(id){
    this.DaftarguruService.getAllDaftarGuru(id).subscribe(
      (data) => {
        this.getAllGuru = data.teachers;
      },
      err => {
        console.log("err", err);
        // do a function here
      }
    )
  }

  index(i){
    return i+=1;
  }

  postTeachersRegistration() {
    this.subscription = this.DaftarguruService.postTeachersRegistration(this.daftarGuru.value).subscribe((data) => {
      alert("Pendaftaran berhasil");
      window.location.reload();
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

  deleteItem(id){
    this.subscription = this.DaftarguruService.deleteTeachers(id).subscribe((data) => {
      alert("Guru Pendamping berhasil Dihapus");
      window.location.reload();
    },
    err => {
      console.log('err', err);
      if (err.status === 500){
        alert("Gagal Menghapus");
      }
      else if (err.status !== 500){
        alert("Gagal Menghapus");
      }
    })
  }
}
