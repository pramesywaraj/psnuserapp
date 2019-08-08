import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-daftarpeserta',
  templateUrl: './daftarpeserta.component.html',
  styleUrls: ['./daftarpeserta.component.scss']
})
export class DaftarpesertaComponent implements OnInit {
  
  daftarMurid: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.daftarMurid = this.formBuilder.group(
      {
        name : [""],
        email : [""],
        phone : [""],
      }
    );

  }

  ngOnInit() {
  }
  
  postMurid(){
    console.log("Daftar Murid")
  }

}