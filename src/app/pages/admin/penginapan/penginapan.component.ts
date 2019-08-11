import { Component, OnInit } from '@angular/core';
import { PenginapanService } from 'src/app/services/penginapan.service';

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

  daftarPenginapan: [];

  displayedColumns: string[] = ['indexNumber', 'name', 'quota', 'currentQuota', 'pricePerNight'];

  constructor(public DaftarpenginapanService: PenginapanService) { 
    this.getAllLodgings();
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

  indexing(i) {
    return i+=1;
  }

  formatPrice(value) {
    let val = (value/1)
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  }

}
