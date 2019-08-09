import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DaftarlombaService } from 'src/app/services/daftarlomba.service';


@Component({
  selector: 'app-daftarlomba',
  templateUrl: './daftarlomba.component.html',
  styleUrls: ['./daftarlomba.component.scss']
})
export class DaftarlombaComponent implements OnInit {

  indexNumber: number;
  name: any;
  memberPerTeam: number;
  maxTeam: number;
  status: string;

  daftarLomba = [];

  displayedColumns: string[] = ['indexNumber', 'name', 'memberPerTeam', 'maxTeam', 'registrationStatus'];

  constructor(private formBuilder: FormBuilder, public DaftarlombaService: DaftarlombaService) { 
    this.getDaftarLomba();
  }

  ngOnInit() {
  }
  
  getDaftarLomba(){
    this.DaftarlombaService.getAllDaftarLomba().subscribe(
      (data) => {
        this.daftarLomba = data.contests;
        if(data.status == 200) {
          console.log("Cek Data : ", this.daftarLomba);
        }
      },
      err => {
        console.log("err", err);
        // do a function here
      }
    )
  }

  teamQuota(maxTeam, registeredTeam){
    return maxTeam - registeredTeam;
  }

  indexing(i) {
    return i+=1;
  }
}
