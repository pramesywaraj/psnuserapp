import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DaftarguruService } from 'src/app/services/daftarguru.service';


@Component({
  selector: 'app-daftarguru',
  templateUrl: './daftarguru.component.html',
  styleUrls: ['./daftarguru.component.scss']
})
export class DaftarguruComponent implements OnInit {

  allGuru: [];
  daftarGuru: FormGroup;

  constructor(private formBuilder: FormBuilder, public DaftarguruService: DaftarguruService) {
    this.getGuru('5d3f24bd5f5b93279877474e');
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
  
  getGuru(id){
    this.DaftarguruService.getAllDaftarGuru(id).subscribe(
      (data) => {
        this.allGuru = data.teachers;
        if(data.status == 200) {
          console.log("Cek Data : ", this.allGuru);
        }
      },
      err => {
        console.log("err", err);
        // do a function here
      }
    )
  }

}
