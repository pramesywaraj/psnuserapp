import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-daftarlomba',
  templateUrl: './daftarlomba.component.html',
  styleUrls: ['./daftarlomba.component.scss']
})
export class DaftarlombaComponent implements OnInit {

  daftarTeam: FormGroup;

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
