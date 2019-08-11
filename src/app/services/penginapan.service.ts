import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { ConfigService } from './config.service';

import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PenginapanService {

  constructor(private http: HttpClient, private configService: ConfigService) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('token')),
    })
  }

  public getAllAccommodation(): Observable<any> {
    return this.http.get<any>(
      this.configService.baseUrl + 'accommodation/', this.httpOptions)
      .pipe(
        map(resp => {
          return resp;
        }
      )
    )
  }
 
}
