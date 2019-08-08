import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-daftartim',
  templateUrl: './daftartim.component.html',
  styleUrls: ['./daftartim.component.scss']
})
export class DaftartimComponent implements OnInit {

  daftarTeam: FormGroup;
  students: Array<any>;

  constructor(private formBuilder: FormBuilder) { 
    this.daftarTeam = this.formBuilder.group(
      {
        name : [""],
        contest : [""],
        studentA : [""],
        studentB : [""],
        studentC : [""],
      }
    );
  }

  ngOnInit() {
  }
  
  postTeam(){
    console.log("Cek : ", this.daftarTeam)
  }

  // postMurid(){
  //   console.log("Daftar Murid")
  // }

}
