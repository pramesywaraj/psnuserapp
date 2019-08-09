import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { ConfigService } from './config.service';

import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient, private configService: ConfigService) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  public postSchoolRegistration(data): Observable<any> {
    return this.http.post<any>(
      this.configService.baseUrl + 'auth/registration', JSON.stringify(data), this.httpOptions)
      .pipe(
        map(resp => {
            return resp;
        })
      )
  }  
}
