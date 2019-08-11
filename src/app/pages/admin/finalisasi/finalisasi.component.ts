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
  getAllUnpaidTeam: any;

  private subscription: Subscription;
  schoolId: any;

  constructor(public FinalisasiService: FinalisasiService, public router: Router) { 
    this.schoolId = JSON.parse(localStorage.getItem('schoolId'));
    let contest = 1;
    let student = 3;
    this.getAllUnpaidGuruBySchoolId(this.schoolId);
    this.getAllUnpaidTeamBySchoolId(this.schoolId, contest, student);
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
      total += data.contest.pricePerStudent * data.contest.memberPerTeam;
    }
    // let total = this.allUnpaidTeam.reduce( (subtotal, item) => subtotal + item.contest.pricePerStudent * item.contest.memberPerTeam, 0 )
    return this.formatPrice(total);  
  }

  generatePayment() {
    if(confirm('Apakah Anda telah yakin untuk melakukan pembayaran?')) {
      let type = {
        "type": "registration",
        "school": this.schoolId
      }

      this.FinalisasiService.generatePayment(type).subscribe(res => {
        alert('Pendaftaran telah dikonfirmasi, mohon membayar pada VA (Virtual Account) yang telah tersedia pada halaman selanjutnya.');
        console.log(res);
        this.router.navigate(['/admin/pembayaran']);
      },
        err => {
          console.log(err);
          alert('Gagal melakukan konfirmasi pendaftaran, harap hubungi Admin.');
        }
      );

    }
  }

}
