import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { ConfigService } from './config.service';

import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DaftarguruService {

  constructor(private http: HttpClient, private configService: ConfigService) {
   }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('token')),
    })
  }

  teacherData = null;

  public getAllDaftarGuru(id): Observable<any> {
    return this.http.get<any>(
      this.configService.baseUrl + 'teachers/school/' + id, this.httpOptions)
      .pipe(
        map(resp => {
          return resp;
        })
      )
  }  

  public getAllUnbookedDaftarGuru(id): Observable<any> {
    return this.http.get<any>(
      this.configService.baseUrl + 'teachers/unbooked-accommodation/school/' + id, this.httpOptions)
      .pipe(
        map(resp => {
          return resp;
        })
      )
  }  

  public postTeachersRegistration(data): Observable<any> {
    return this.http.post<any>(
      this.configService.baseUrl + 'teachers', JSON.stringify(data), this.httpOptions)
      .pipe(
        map(resp => {
            return resp;
        })
      )
  }  

  public deleteTeachers(id): Observable<any> {
    return this.http.delete<any>(
      this.configService.baseUrl + 'teachers/' + id, this.httpOptions)
      .pipe(
        map(resp => {
            return resp;
        })
      )
  }  

  public editTeachersData(data): Observable<any> {
    return this.http.put<any>(
      this.configService.baseUrl + 'teachers/',  JSON.stringify(data), this.httpOptions)
      .pipe(
        map(resp => {
            return resp;
        })
      )
  }  

  public storeTeacherData(teacherData) {
    window.localStorage.setItem('teacherData', JSON.stringify(teacherData));
    this.teacherData = teacherData;
  }

  public loadTeacherData() {
    let teacherData = JSON.parse(window.localStorage.getItem('teacherData'));
    return teacherData;
  }

  public editCompleted() {
    this.teacherData = null;
    localStorage.removeItem("teacherData");
  }

}
