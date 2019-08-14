import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DaftartimService } from 'src/app/services/daftartim.service';
import { DaftarpesertaService } from 'src/app/services/daftarpeserta.service';

@Component({
  selector: 'app-edittim',
  templateUrl: './edittim.component.html',
  styleUrls: ['./edittim.component.scss']
})
export class EdittimComponent implements OnInit {

  numIndex: any;
  maxSelected: any;

  dataLomba: any;
  dataStudent: any;
  teamData: any;
  
  availDataStudent: [];
  getAllTeam: [];
  daftarTeam: FormGroup;

  private subscription: Subscription;

  constructor(public formBuilder: FormBuilder, public DaftarteamService: DaftartimService, public router: Router, public DaftarpesertaService: DaftarpesertaService) {
    const teamData = JSON.parse(localStorage.getItem('teamData'));
    this.teamData = teamData;
    const schoolId = JSON.parse(localStorage.getItem('schoolId'));
    let contest = 1;
    let student = 1;
    this.getAllTeamBySchoolId(schoolId, contest, student);
    this.getAvailStudent(schoolId);
    this.maxSelected = teamData.contest.memberPerTeam;
    this.dataLomba = JSON.parse(localStorage.getItem('dataLomba'));
    this.daftarTeam = this.formBuilder.group(
      {
        _id: teamData._id,
        name : [teamData.name, Validators.required],
        contest : [teamData.contest._id, Validators.required],
        student : [[], Validators.required],
      }
    );
  }

  ngOnInit() {
  }

  getAllTeamBySchoolId(id, contest, student){
    this.DaftarteamService.getAllDaftarTim(id, contest, student).subscribe(
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
    this.DaftarpesertaService.getAvailStudent(id).subscribe(
      (data) => {
        this.dataStudent = data.students;
        console.log("cek data : ", this.dataStudent);
        console.log("anggota terdaftar : ", this.teamData.student);
        let i = 0;
        let temp = this.teamData;
        for (i=0; i<temp.student.length;i++) {
          console.log(i);
          console.log("Data loop : ", temp.student[i]);
          let id = temp.student[i]._id;
          let email = temp.student[i].email;
          let name = temp.student[i].name;
          let phone = temp.student[i].phone;
          let school = temp.student[i].school;
          let team = temp.student[i].team;
        
          this.dataStudent.push({"_id": id, "email": email, "name": name, "phone": phone, "school": school,"team": team})
        }        
        this.DaftarteamService.storeAvailStudent(data);
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

  ngOnDestroy() {
    if(this.subscription) this.subscription.unsubscribe();
  }

  editTeamRegistration() {
    console.log(this.daftarTeam.value);
    if(this.daftarTeam.value.student.length > this.maxSelected) {
      alert('Perhatian! Siswa yang dipilih melebihi maksimum siswa dalam satu tim. Harap hanya memilih ' + this.maxSelected + ' orang saja.');
    } 
    
    else if(this.daftarTeam.value.student.length !== this.maxSelected) {
      let num: number = this.maxSelected - this.daftarTeam.value.students.length;
      alert('Perhatian! Harap memilih ' + num + ' orang lagi.');
    } 
    
    else {
      //Remove Atribute from FormGroup:
      this.daftarTeam.removeControl('contest');
      
      console.log("Cek Form : ", this.daftarTeam);
      this.subscription = this.DaftarteamService.editTeamData(this.daftarTeam.value).subscribe((data) => {
        alert("Pendaftaran berhasil");
        this.router.navigate(['admin/daftartim']);
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

}
