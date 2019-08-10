import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DaftartimService } from 'src/app/services/daftartim.service';

@Component({
  selector: 'app-daftartim',
  templateUrl: './daftartim.component.html',
  styleUrls: ['./daftartim.component.scss']
})
export class DaftartimComponent implements OnInit {

  name = new FormControl('', [Validators.required]);
  contest = new FormControl('', [Validators.required]);
  students = new FormControl('', [Validators.required]);

  getAllTeam: [];
  daftarTeam: FormGroup;

  private subscription: Subscription;

  displayedColumns: string[] = ['indexNumber', 'name', 'contest', 'student', 'edit', 'delete'];

  constructor(private formBuilder: FormBuilder, public DaftartimService: DaftartimService, public router: Router) { 
    const schoolId = JSON.parse(localStorage.getItem('schoolId'));
    let contest = 1;
    let student = 1;
    this.getAllTeamBySchoolId(schoolId, contest, student);
    const dataLomba = JSON.parse(localStorage.getItem('dataLomba'));
    this.contest = dataLomba;
    this.daftarTeam = this.formBuilder.group(
      {
        name : this.name,
        contest : this.contest,
        students : this.students,
      }
    );
  }

  ngOnInit() {
  }
  
  getAllTeamBySchoolId(id, contest, student){
    this.DaftartimService.getAllDaftarTim(id, contest, student).subscribe(
      (data) => {
        this.getAllTeam = data.teams;
        console.log("cek Data : ", this.getAllTeam);
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

  postTeamRegistration() {
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
