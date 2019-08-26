import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FinalisasiService } from 'src/app/services/finalisasi.service';
import { PembayaranService } from '../../../services/pembayaran.service';
import { PenginapanService } from 'src/app/services/penginapan.service';


@Component({
  selector: 'app-finalisasi',
  templateUrl: './finalisasi.component.html',
  styleUrls: ['./finalisasi.component.scss']
})
export class FinalisasiComponent implements OnInit, OnDestroy {

  indexNumber: number;
  name: any;
  quota: any;
  currentQuota: any;
  pricePerNight: any;

  getAllUnpaidLodging= [];
  getAllUnpaidGuru= [];
  getAllUnpaidTeam= [];

  private subscription: Subscription;
  schoolId: any;

  bills: any;

  constructor(public FinalisasiService: FinalisasiService, public router: Router, public pembayaran: PembayaranService, public DaftarpenginapanService: PenginapanService) { 
    this.schoolId = JSON.parse(localStorage.getItem('schoolId'));
    let contest = 1;
    let student = 3;
    this.getAllUnpaidGuruBySchoolId(this.schoolId);
    this.getAllUnpaidTeamBySchoolId(this.schoolId, contest, student);
    this.getAllLodgings();
  }

  ngOnInit() {
    this.subscription = this.pembayaran.getAllBills(this.schoolId).subscribe(res => {
      this.bills = res.bills;
    },
      err => console.log(err)
    );
  }

  ngOnDestroy() {
    
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

  getAllLodgings(){
    this.DaftarpenginapanService.getAllAccommodation().subscribe(
      (data) => {
        this.getAllUnpaidLodging = data.accommodations;
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

  checkBill() {
    let status: boolean = true;
    this.bills.forEach(bill => {
      console.log(bill);
        if(bill.payment.status === 'waiting') {
          status = false;
        }
      }
    )
    console.log(status);
    return status;
  }

  generatePayment() {
    if(confirm('Apakah Anda telah yakin untuk melakukan pembayaran?')) {
      let type = {
        "type": "registration",
        "school": this.schoolId
      }

      if(this.checkBill()) {
        this.FinalisasiService.generatePayment(type).subscribe(res => {
          alert('Pendaftaran telah dikonfirmasi, mohon membayar pada VA (Virtual Account) yang telah tersedia pada halaman selanjutnya.');
          this.router.navigate(['/admin/pembayaran']);
        },
          err => {
            console.log(err);
            alert('Gagal melakukan konfirmasi pendaftaran, harap hubungi Admin.');
          }
        );

      } else {
        alert('Tidak dapat melakukan finalisasi. Harap membayar tagihan sebelumnya terlebih dahulu pada VA yang tertera.');
        this.router.navigate(['/admin/pembayaran']);
      }

    }
  }

}
