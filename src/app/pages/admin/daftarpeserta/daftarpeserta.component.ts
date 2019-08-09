import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscriber, Subscription } from 'rxjs';


@Component({
  selector: 'app-daftarpeserta',
  templateUrl: './daftarpeserta.component.html',
  styleUrls: ['./daftarpeserta.component.scss']
})
export class DaftarpesertaComponent implements OnInit, OnDestroy {
  
  displayedColumns: string[] = ['index', 'name', 'phone', 'email'];
  daftarMurid: FormGroup;

  subscribe: Subscription;

  studentList: any = [];

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
    // this.subscribe = this.
  }
  
  postMurid(){
    console.log("Daftar Murid")
  }

}