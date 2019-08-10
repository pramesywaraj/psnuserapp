import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DaftarpesertaService } from 'src/app/services/daftarpeserta.service';


@Component({
  selector: 'app-editpeserta',
  templateUrl: './editpeserta.component.html',
  styleUrls: ['./editpeserta.component.scss']
})
export class EditpesertaComponent implements OnInit {

  name = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  phone = new FormControl('', [Validators.required]);

  daftarStudent: FormGroup;

  private subscription: Subscription;

  constructor(private formBuilder: FormBuilder, public DaftarpesertaService: DaftarpesertaService, public router: Router) {
    const studentData = JSON.parse(localStorage.getItem('studentData'));
    this.name = studentData.name;
    this.email = studentData.email;
    this.phone = studentData.phone;
    this.daftarStudent = this.formBuilder.group(
      {
        _id: studentData._id,
        name : this.name,
        email : this.email,
        phone : this.phone,
      }
    );

   }

  ngOnInit() {
  }

  editStudentData() {
    this.subscription = this.DaftarpesertaService.editStudentData(this.daftarStudent.value).subscribe((data) => {
      this.DaftarpesertaService.editCompleted();
      alert("Data peserta berhasil diubah");
      this.router.navigate(['/admin/daftarpeserta']);
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


}
