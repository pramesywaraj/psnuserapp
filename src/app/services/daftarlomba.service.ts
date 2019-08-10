import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { ConfigService } from './config.service';

import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DaftarlombaService {

  constructor(private http: HttpClient, private configService: ConfigService) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  dataLomba = null;

  public getAllDaftarLomba(): Observable<any> {
    return this.http.get<any>(
      this.configService.baseUrl + 'contests')
      .pipe(
        map(resp => {
          this.storeDataLomba(resp.contests);
          return resp;
        })
      )
  }  

  public storeDataLomba(dataLomba) {
    window.localStorage.setItem('dataLomba', JSON.stringify(dataLomba));
    this.dataLomba = dataLomba;
  }

  public loadLomba() {
    let dataLomba = JSON.parse(window.localStorage.getItem('dataLomba'));
    return dataLomba;
  }

}
