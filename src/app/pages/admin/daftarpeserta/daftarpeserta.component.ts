import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DaftarpesertaService } from 'src/app/services/daftarpeserta.service';

@Component({
  selector: 'app-daftarpeserta',
  templateUrl: './daftarpeserta.component.html',
  styleUrls: ['./daftarpeserta.component.scss']
})
export class DaftarpesertaComponent implements OnInit, OnDestroy {
  
  name = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  phone = new FormControl('', [Validators.required]);

  getAllStudent: [];
  daftarPeserta: FormGroup;

  private subscription: Subscription;

  displayedColumns: string[] = ['indexNumber', 'name', 'email', 'phone', 'edit', 'delete'];

  constructor(private formBuilder: FormBuilder, public DaftarpesertaService: DaftarpesertaService, public router: Router) {
    const schoolId = JSON.parse(localStorage.getItem('schoolId'));
    this.getAllPesertaBySchoolId(schoolId);
    this.daftarPeserta = this.formBuilder.group(
      {
        name : this.name,
        email : this.email,
        phone : this.phone,
      }
    );
  }

  ngOnInit() {
    // this.subscribe = this.
  }

  
  getAllPesertaBySchoolId(id){
    this.DaftarpesertaService.getAllDaftarPeserta(id).subscribe(
      (data) => {
        this.getAllStudent = data.students;
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

  postStudentRegistration() {
    this.subscription = this.DaftarpesertaService.postStudentRegistration(this.daftarPeserta.value).subscribe((data) => {
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

  editStudentData(data){
    this.DaftarpesertaService.storeStudentData(data);
    this.router.navigate(['admin/edit/editpeserta']);
  }

  deleteItem(id){
    this.subscription = this.DaftarpesertaService.deleteStudent(id).subscribe((data) => {
      alert("Peserta berhasil Dihapus");
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