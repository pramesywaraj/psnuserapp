import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { ConfigService } from './config.service';

import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private configService: ConfigService) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  userToken = null;
  schoolId = null;

  public postLoginData(data): Observable<any> {
    return this.http.post<any>(
      this.configService.baseUrl + 'auth/login', JSON.stringify(data), this.httpOptions)
      .pipe(
        map(resp => {
          this.storeToken(resp.token);
          this.storeSchoolId(resp.school._id);
          return resp;
      })
    )
  } 
  
  public logout() {
    this.userToken = null;
    this.schoolId = null;
    localStorage.removeItem("token");
    localStorage.removeItem("schoolId");
  }

  public storeToken(token) {
    window.localStorage.setItem('token', JSON.stringify(token));
    this.userToken = token;
  }

  public storeSchoolId(schoolId) {
    window.localStorage.setItem('schoolId', JSON.stringify(schoolId));
    this.schoolId = schoolId;
  }

  public loadToken() {
    let token = JSON.parse(window.localStorage.getItem('token'));
    return token;
  }

  public loadSchoolId() {
    let schoolId = JSON.parse(window.localStorage.getItem('schoolId'));
    return schoolId;
  }
}
