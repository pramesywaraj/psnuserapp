import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { ConfigService } from './config.service';

import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DaftarguruService {

  constructor(private http: HttpClient, private configService: ConfigService) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  public getAllDaftarGuru(id:any): Observable<any> {
    return this.http.get<any>(
      this.configService.baseUrl + 'teachers/school/' + id)
      .pipe(
        map(resp => {
          return resp;
        })
      )
  }  
}
