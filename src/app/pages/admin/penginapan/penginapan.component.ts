import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { PenginapanService } from 'src/app/services/penginapan.service';
import { DaftarpesertaService } from '../../../services/daftarpeserta.service';
import { DaftarguruService } from '../../../services/daftarguru.service';


@Component({
  selector: 'app-penginapan',
  templateUrl: './penginapan.component.html',
  styleUrls: ['./penginapan.component.scss']
})
export class PenginapanComponent implements OnInit {

  indexNumber: number;
  name: any;
  quota: any;
  currentQuota: any;
  pricePerNight: any;

  // Form Data
  userType: any;
  teacherId: any;
  studentId: any;
  accommodationId: any;

  daftarPenginapan: [];
  getAllTeacher: [];
  getAllStudent: [];

  daftarPenginapanAll: FormGroup;

  private subscription: Subscription;

  displayedColumns: string[] = ['indexNumber', 'name', 'quota', 'currentQuota', 'pricePerNight'];

  constructor(private formBuilder: FormBuilder, public DaftarpenginapanService: PenginapanService, public router: Router, public DaftarpesertaService: DaftarpesertaService, public DaftarguruService: DaftarguruService) { 
    const schoolId = JSON.parse(localStorage.getItem('schoolId'));
    this.getAllGuruBySchoolId(schoolId);
    this.getAllPesertaBySchoolId(schoolId);
    this.getAllLodgings();
    this.userType = '';
    this.daftarPenginapanAll = this.formBuilder.group(
      {
        userType : ['', Validators.required],
        teacher : [[], Validators.required],
        student : [[], Validators.required],
        accommodation : ['', Validators.required],
      }
    );  
    console.log("Check Value : ", this.daftarPenginapanAll.value.userType);
    if(this.daftarPenginapanAll.value.userType === 'teacher'){
        //Remove Atribute from FormGroup:
        this.daftarPenginapanAll.removeControl('student');

        this.daftarPenginapanAll = this.formBuilder.group(
          {
            userType : ['teacher', Validators.required],
            teacher : [[], Validators.required],
            accommodation : ['', Validators.required],
          }
        );  
      }
      else if(this.daftarPenginapanAll.value.userType === 'student'){
        //Remove Atribute from FormGroup:
        this.daftarPenginapanAll.removeControl('teacher');

        this.daftarPenginapanAll = this.formBuilder.group(
          {
            userType : ['student', Validators.required],
            student : [[], Validators.required],
            accommodation : ['', Validators.required],
          }
        );  
      }
  }

  ngOnInit() {
  }

  getAllLodgings(){
    this.DaftarpenginapanService.getAllAccommodation().subscribe(
      (data) => {
        this.daftarPenginapan = data.accommodations;
      },
      err => {
        console.log("err", err);
        // do a function here
      }
    )
  }

  getAllGuruBySchoolId(id){
    this.DaftarguruService.getAllDaftarGuru(id).subscribe(
      (data) => {
        this.getAllTeacher = data.teachers;
        console.log("Check Daftar Guru : ", this.getAllTeacher);
      },
      err => {
        console.log("err", err);
        // do a function here
      }
    )
  }

  getAllPesertaBySchoolId(id){
    this.DaftarpesertaService.getAllDaftarPeserta(id).subscribe(
      (data) => {
        this.getAllStudent = data.students;
        console.log("Check Daftar Peserta : ", this.getAllStudent);
      },
      err => {
        console.log("err", err);
        // do a function here
      }
    )
  }

  postLodgingRegistration() {
    console.log("Check User Type : ", this.daftarPenginapanAll.value.userType);

    if(this.daftarPenginapanAll.value.userType === "teacher"){
      //Remove Atribute from FormGroup:
      this.daftarPenginapanAll.removeControl('student');

      console.log("Check New Data : ", this.daftarPenginapanAll.value);
      this.subscription = this.DaftarpenginapanService.postLodgingRegistration(this.daftarPenginapanAll.value).subscribe((data) => {
        alert("Pendaftaran Penginapan Guru berhasil");
        // window.location.reload();
      },
      err => {
        console.log('err', err);
        if (err.status === 500){
          alert("Terjadi Kesalahan pada Server");
        }
        else if (err.status !== 500){
          alert("Data anda Salah");
        }
      })
    }
    else{
      //Remove Atribute from FormGroup:
      this.daftarPenginapanAll.removeControl('teacher');

      console.log("Check New Data : ", this.daftarPenginapanAll.value);
      this.subscription = this.DaftarpenginapanService.postLodgingRegistration(this.daftarPenginapanAll.value).subscribe((data) => {
        alert("Pendaftaran Penginapan Peserta berhasil");
        // window.location.reload();
      },
      err => {
        console.log('err', err);
        if (err.status === 500){
          alert("Terjadi Kesalahan pada Server");
        }
        else if (err.status !== 500){
          alert("Data anda Salah");
        }
      })
    }
  }  

  indexing(i) {
    return i+=1;
  }

  ngOnDestroy() {
    if(this.subscription) this.subscription.unsubscribe();
  }

  formatPrice(value) {
    let val = (value/1)
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  }

}
