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

  startDateCalendar = new Date(2019, 10, 1);

  indexNumber: number;
  nameLodging: any;
  nameBooked: any;
  quota: any;
  currentQuota: any;
  pricePerNight: any;
  startDate: any;
  duration: any;
  durations: any;

  // Form Data
  userType: any;
  teacherId: any;
  studentId: any;
  accommodationId: any;

  daftarPenginapan:any =  [];
  getAllLodgingBooks: any = [];
  getAllTeacher: any = [];
  getAllStudent: any = [];

  showStudent: boolean;
  showTeacher: boolean;
  

  daftarPenginapanAll: FormGroup;

  private subscription: Subscription;

  displayedColumns: string[] = ['indexNumber', 'nameLodging', 'quota', 'currentQuota', 'pricePerNight'];
  displayedbooks: string[] = ['indexNumber', 'nameLodging', 'userType', 'nameBooked', 'startDate', 'duration', 'delete'];

  constructor(private formBuilder: FormBuilder, public DaftarpenginapanService: PenginapanService, public router: Router, public DaftarpesertaService: DaftarpesertaService, public DaftarguruService: DaftarguruService) { 
    const schoolId = JSON.parse(localStorage.getItem('schoolId'));
    this.getAllUnbookedGuruBySchoolId(schoolId);
    this.getAllUnbookedPesertaBySchoolId(schoolId);
    this.getAllLodgings();
    this.getAllLodgingsBooks();
    this.userType = '';
    this.daftarPenginapanAll = this.formBuilder.group(
      {
        userType : ['', Validators.required],
        teacher : [[], Validators.required],
        student : [[], Validators.required],
        accommodation : ['', Validators.required],
        startDate: ['', Validators.required],
        duration: [this.duration, Validators.required],
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
            startDate: ['', Validators.required],
            duration: [this.duration, Validators.required],
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
            startDate: ['', Validators.required],
            duration: [this.duration, Validators.required],
          }
        );  
      }
  }

  ngOnInit() {
    this.showStudent = false;
    this.showTeacher = false;
  }

  filteringDate = (d: Date): boolean => {
    const month = d.getMonth();
    console.log(month);
    return month > 9;
  }

  changeType(val) {
    if(val === 'teacher') {
      if(this.showStudent) {
        this.showStudent = !this.showStudent;      
      }
      this.showTeacher = true;
    } else {
      if(this.showTeacher) {
        this.showTeacher = !this.showTeacher;      
      }
      this.showStudent = true;      
    }
    console.log("student and teacher", this.showStudent, this.showTeacher);
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

  getAllLodgingsBooks(){
    this.DaftarpenginapanService.getAllBooks().subscribe(
      (data) => {
        this.getAllLodgingBooks = data.bookings;
        console.log("Check All Booking : ", this.getAllLodgingBooks);
      },
      err => {
        console.log("err", err);
        // do a function here
      }
    )
  }

  getAllUnbookedGuruBySchoolId(id){
    this.DaftarguruService.getAllUnbookedDaftarGuru(id).subscribe(
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

  getAllUnbookedPesertaBySchoolId(id){
    this.DaftarpesertaService.getAllUnbookedDaftarPeserta(id).subscribe(
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
    
    this.daftarPenginapanAll.value.userType === 'teacher' ? this.daftarPenginapanAll.removeControl('student') : this.daftarPenginapanAll.removeControl('teacher');

    if(this.daftarPenginapanAll.valid) {

      if(this.daftarPenginapanAll.value.userType === "teacher"){
        //Remove Atribute from FormGroup:
        this.daftarPenginapanAll.removeControl('student');

        console.log("Check New Data : ", this.daftarPenginapanAll.value);
        this.subscription = this.DaftarpenginapanService.postLodgingRegistration(this.daftarPenginapanAll.value).subscribe((data) => {
          alert("Pendaftaran Penginapan Guru berhasil");
          window.location.reload();
        },
        err => {
          console.log('err', err);
          if (err.status === 400){
            alert("Data Sudah Terdaftar Tidak dapat Dihapus");
          }
          else if (err.status === 500){
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
          window.location.reload();
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
    } else {
      alert("Harap melengkapi form yang belum terisi.");
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

  deleteItem(id){
    this.subscription = this.DaftarpenginapanService.deleteLodging(id).subscribe(data => {
      alert("Daftar Pesanan berhasil Dihapus");
      window.location.reload();
    },
    err => {
      console.log('err', err);
      if (err.status === 400){
        alert("Daftar Pesanan tidak dapat dihapus karena sudah dibayar");
      }
      else if (err.status === 500){
        alert("Email atau username sudah terdaftar");
      }
      else if (err.status !== 500){
        alert("Gagal Menghapus");
      }

    })
  }

}
