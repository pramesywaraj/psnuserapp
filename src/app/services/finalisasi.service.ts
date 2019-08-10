import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { ConfigService } from './config.service';

import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FinalisasiService {

  constructor(private http: HttpClient, private configService: ConfigService) {
  }

 httpOptions = {
   headers: new HttpHeaders({
     'Content-Type': 'application/json',
     'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('token')),
   })
 }

  public getAllUnpaidDaftarGuru(id): Observable<any> {
    return this.http.get<any>(
     this.configService.baseUrl + 'teachers/unpaid/school/' + id, this.httpOptions)
     .pipe(
      map(resp => {
        return resp;
      })
    )
  }  

 public getAllUnpaidTim(id, contest, student): Observable<any> {
  return this.http.get<any>(
    this.configService.baseUrl + 'teams/unpaid/school/' + id + '?populateContest=' + contest + '&populateStudent=' + student, this.httpOptions)
    .pipe(
      map(resp => {
        return resp;
      })
    )
  }   

}
