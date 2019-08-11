import { Component, OnInit } from '@angular/core';
import { CompetitionService } from 'src/app/services/competition.service';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.scss']
})
export class CompetitionComponent implements OnInit {

  allCompetition = [];

  constructor(public competition: CompetitionService, private sanitizer: DomSanitizer) {
    this.getCompetition();
   }

  ngOnInit() {
  }

  getCompetition(){
    this.competition.getAllCompetition().subscribe(
      (data) => {
        this.allCompetition = data.contests;
      },
      err => {
        console.log("err", err);
        // do a function here
      }
    )
  }

  imageUrl(data) {
    let link = data;
    return this.sanitizer.bypassSecurityTrustResourceUrl(link);
  }  

}
