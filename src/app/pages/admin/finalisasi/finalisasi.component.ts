import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FinalisasiService } from 'src/app/services/finalisasi.service';


@Component({
  selector: 'app-finalisasi',
  templateUrl: './finalisasi.component.html',
  styleUrls: ['./finalisasi.component.scss']
})
export class FinalisasiComponent implements OnInit {

  getAllUnpaidGuru: [];
  getAllUnpaidTeam: [];

  private subscription: Subscription;

  constructor(public FinalisasiService: FinalisasiService, public router: Router) { 
    const schoolId = JSON.parse(localStorage.getItem('schoolId'));
    let contest = 1;
    let student = 3;
    this.getAllUnpaidGuruBySchoolId(schoolId);
    this.getAllUnpaidTeamBySchoolId(schoolId, contest, student);
  }

  ngOnInit() {
  }

  getAllUnpaidGuruBySchoolId(id){
    this.FinalisasiService.getAllUnpaidDaftarGuru(id).subscribe(
      (data) => {
        this.getAllUnpaidGuru = data.teachers;
      },
      err => {
        console.log("err", err);
        // do a function here
      }
    )
  }

  getAllUnpaidTeamBySchoolId(id, contest, student){
    this.FinalisasiService.getAllUnpaidTim(id, contest, student).subscribe(
      (data) => {
        this.getAllUnpaidTeam = data.teams; 
        let total = 0;
        for(let data of this.getAllUnpaidTeam){
          for(let datas of data.contest){
            let sum = datas.pricePerStudent * data.memberPerTeam;
            total+= sum;
          }
        }
      
      },
      err => {
        console.log("err", err);
        // do a function here
      }
    )
  }

  formatPrice(value) {
    let val = (value/1)
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  }

  totalPrice() {
    let total = 0;
    for(let data of this.getAllUnpaidTeam){
      for(let datas of data.contest){
        let sum = datas.pricePerStudent * data.memberPerTeam;
        total+= sum;
      }
    }
    return this.formatPrice(total);
  }


}
