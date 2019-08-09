import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-daftarguru',
  templateUrl: './daftarguru.component.html',
  styleUrls: ['./daftarguru.component.scss']
})
export class DaftarguruComponent implements OnInit {

  daftarGuru: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.daftarGuru = this.formBuilder.group(
      {
        name : [""],
        email : [""],
        phone : [""],
        nip : [""],
        school : [""],
      }
    );
  }

  ngOnInit() {
  }
  
  postGuru(){
    console.log("Daftar Guru")
  }

}
