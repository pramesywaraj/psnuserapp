import { Component, OnInit } from '@angular/core';
import { PembayaranService } from 'src/app/services/pembayaran.service';


@Component({
  selector: 'app-pembayaran',
  templateUrl: './pembayaran.component.html',
  styleUrls: ['./pembayaran.component.scss']
})
export class PembayaranComponent implements OnInit {

  indexNumber: number;
  VANumber: any;
  type: any;
  status: any;
  createdDate: any;
  createdTime: any;
  totalPrice: any;

  daftarPembayaran: [];

  displayedColumns: string[] = ['indexNumber', 'VANumber', 'type', 'status', 'createdDate', 'createdTime', 'totalPrice'];

  constructor(public DaftarpembayaranService: PembayaranService) { 
    const schoolId = JSON.parse(localStorage.getItem('schoolId'));
    this.getAllBillsBySchoolId(schoolId);
  }

  ngOnInit() {
  }
  
  getAllBillsBySchoolId(id){
    this.DaftarpembayaranService.getAllBills(id).subscribe(
      (data) => {
        console.log(data.bills)
        this.daftarPembayaran = data.bills;
      },
      err => {
        console.log("err", err);
        // do a function here
      }
    )
  }

  indexing(i) {
    return i+=1;
  }

  formatPrice(value) {
    let val = (value/1)
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  }

}
