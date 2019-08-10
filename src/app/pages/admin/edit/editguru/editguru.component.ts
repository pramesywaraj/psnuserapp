import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { DaftarguruService } from 'src/app/services/daftarguru.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-editguru',
  templateUrl: './editguru.component.html',
  styleUrls: ['./editguru.component.scss']
})
export class EditguruComponent implements OnInit {

  name = new FormControl('', [Validators.required]);
  NIP = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  phone = new FormControl('', [Validators.required]);

  daftarGuru: FormGroup;

  private subscription: Subscription;

  constructor(private formBuilder: FormBuilder, public DaftarguruService: DaftarguruService, public router: Router) {
    const teacherData = JSON.parse(localStorage.getItem('teacherData'));
    this.name = teacherData.name;
    this.NIP = teacherData.NIP;
    this.email = teacherData.email;
    this.phone = teacherData.phone;
    const schoolId = JSON.parse(localStorage.getItem('schoolId'));
    this.daftarGuru = this.formBuilder.group(
      {
        _id: teacherData._id,
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

  editTeacherData() {
    this.subscription = this.DaftarguruService.editTeachersData(this.daftarGuru.value).subscribe((data) => {
      alert("Data guru berhasil diubah");
      this.router.navigate(['/admin/daftarguru']);
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
