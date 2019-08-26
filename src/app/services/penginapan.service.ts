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

  lodgingData = null;
  availTeacher = null;
  availStudent = null;
  contest = 1;
  student = 3; 

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

  public getAllBooks(): Observable<any> {
    return this.http.get<any>(
      this.configService.baseUrl + 'booking/', this.httpOptions)
      .pipe(
        map(resp => {
          return resp;
        }
      )
    )
  }

  public postLodgingRegistration(data): Observable<any> {
    return this.http.post<any>(
      this.configService.baseUrl + 'booking', JSON.stringify(data), this.httpOptions)
      .pipe(
        map(resp => {
            return resp;
        })
      )
  }   

  public deleteLodging(id): Observable<any> {
    return this.http.delete<any>(
      this.configService.baseUrl + 'booking/' + id, this.httpOptions)
      .pipe(
        map(resp => {
            return resp;
        })
      )
  }  
    
  public storeAvailTeacher(availTeacher) {
   window.localStorage.setItem('availTeacher', JSON.stringify(availTeacher));
   this.availTeacher = availTeacher;
 }
 
  public loadAvailTeacher() {
    let availPerson = JSON.parse(window.localStorage.getItem('availPerson'));
    return availPerson;
  }

  public storeAvailStudent(availStudent) {
    window.localStorage.setItem('availStudent', JSON.stringify(availStudent));
    this.availStudent = availStudent;
  }

  public loadAvailStudent() {
    let availStudent = JSON.parse(window.localStorage.getItem('availStudent'));
    return availStudent;
  }

  public editCompleted() {
    this.lodgingData = null;
    localStorage.removeItem("lodgingData");
  } 
 
}
