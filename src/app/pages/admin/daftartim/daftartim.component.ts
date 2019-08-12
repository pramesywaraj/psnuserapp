import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DaftartimService } from 'src/app/services/daftartim.service';
import { DaftarpesertaService } from '../../../services/daftarpeserta.service';

@Component({
  selector: 'app-daftartim',
  templateUrl: './daftartim.component.html',
  styleUrls: ['./daftartim.component.scss']
})
export class DaftartimComponent implements OnInit {

  // name = new FormControl('', [Validators.required]);
  // contest = new FormControl('', [Validators.required]);
  // students = new FormControl([], [Validators.required]);

  numIndex: any;
  maxSelected: any;

  dataLomba: any;
  dataStudent: any;

  getAllTeam: [];
  daftarTeam: FormGroup;

  private subscription: Subscription;

  displayedColumns: string[] = ['indexNumber', 'name', 'contest', 'student', 'edit', 'delete'];

  constructor(private formBuilder: FormBuilder, public DaftartimService: DaftartimService, public router: Router, public Daftarpeserta: DaftarpesertaService) { 
    const schoolId = JSON.parse(localStorage.getItem('schoolId'));
    let contest = 1;
    let student = 1;
    this.getAllTeamBySchoolId(schoolId, contest, student);
    this.getAvailStudent(schoolId);
    this.dataLomba = JSON.parse(localStorage.getItem('dataLomba'));
    // this.contest = dataLomba;
    this.daftarTeam = this.formBuilder.group(
      {
        name : ['', Validators.required],
        contest : ['', Validators.required],
        student : [[], Validators.required],
      }
    );
  }

  ngOnInit() {
  }
  
  getAllTeamBySchoolId(id, contest, student){
    this.DaftartimService.getAllDaftarTim(id, contest, student).subscribe(
      (data) => {
        this.getAllTeam = data.teams;
      },
      err => {
        console.log("err", err);
        // do a function here
      }
    )
  }

  getAvailStudent(id){
    this.Daftarpeserta.getAvailStudent(id).subscribe(
      (data) => {
        this.dataStudent = data.students;
        this.DaftartimService.storeAvailStudent(data);
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

  changeStudentsField($event) {
    let temp = this.dataLomba.filter(result => {
      return result._id === $event.value;
    });
    this.maxSelected = temp[0].memberPerTeam;
  }

  checkSelected($event) {
    if($event.value.length > this.maxSelected) {
      alert('Perhatian! Siswa yang dipilih melebihi maksimum siswa dalam satu tim. Harap hanya memilih ' + this.maxSelected + ' orang saja.');
    } else if ($event.value.length !== this.maxSelected) {
      let num: number = this.maxSelected - $event.value.length;
      alert('Perhatian! Harap memilih ' + num + ' orang lagi.');
    } else {
      console.log('masih kurang');
    }
  }

  postTeamRegistration() {
    console.log(this.daftarTeam.value);
    if(this.daftarTeam.value.student.length > this.maxSelected) {
      alert('Perhatian! Siswa yang dipilih melebihi maksimum siswa dalam satu tim. Harap hanya memilih ' + this.maxSelected + ' orang saja.');
    } 
    
    else if(this.daftarTeam.value.student.length !== this.maxSelected) {
      let num: number = this.maxSelected - this.daftarTeam.value.students.length;
      alert('Perhatian! Harap memilih ' + num + ' orang lagi.');
    } 
    
    else {
      this.subscription = this.DaftartimService.postTeamRegistration(this.daftarTeam.value).subscribe((data) => {
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
  }  

  ngOnDestroy() {
    if(this.subscription) this.subscription.unsubscribe();
  }

  editTeamData(data){
    this.DaftartimService.storeTeamData(data);
    this.router.navigate(['admin/edit/edittim']);
  }

  deleteItem(id){
    this.subscription = this.DaftartimService.deleteTeam(id).subscribe(data => {
      alert("Tim berhasil Dihapus");
      window.location.reload();
    },
    err => {
      console.log('err', err);
      if (err.status === 400){
        alert("Tim tidak dapat dihapus karena sudah dibayar");
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
