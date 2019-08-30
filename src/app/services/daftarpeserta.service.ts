import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { ConfigService } from './config.service';

import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DaftarpesertaService {

  constructor(private http: HttpClient, private configService: ConfigService) {
  }

 httpOptions = {
   headers: new HttpHeaders({
     'Content-Type': 'application/json',
     'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('token')),
   })
 }

 studentData = null;

 public getAllDaftarPeserta(schoolId): Observable<any> {
   return this.http.get<any>(
     this.configService.baseUrl + 'students/school/' + schoolId, this.httpOptions)
     .pipe(
       map(resp => {
         return resp;
       })
     )
 }

  public getAllUnbookedDaftarPeserta(schoolId): Observable<any> {
  return this.http.get<any>(
    this.configService.baseUrl + 'students/unbooked-accommodation/school/' + schoolId, this.httpOptions)
    .pipe(
      map(resp => {
        return resp;
      })
    )
  }

 public getAvailStudent(schoolId): Observable<any> {
  return this.http.get<any>(
    this.configService.baseUrl + 'students/available/' + schoolId, this.httpOptions)
    .pipe(
      map(resp => {
        return resp;
      })
    )
}  

 public postStudentRegistration(data): Observable<any> {
   return this.http.post<any>(
     this.configService.baseUrl + 'students/', JSON.stringify(data), this.httpOptions)
     .pipe(
       map(resp => {
           return resp;
       })
     )
 }  

 public deleteStudent(id): Observable<any> {
   return this.http.delete<any>(
     this.configService.baseUrl + 'students/' + id, this.httpOptions)
     .pipe(
       map(resp => {
           return resp;
       })
     )
 }  

 public editStudentData(data): Observable<any> {
   return this.http.put<any>(
     this.configService.baseUrl + 'students/',  JSON.stringify(data), this.httpOptions)
     .pipe(
       map(resp => {
           return resp;
       })
     )
 }  

 public storeStudentData(studentData) {
   window.localStorage.setItem('studentData', JSON.stringify(studentData));
   this.studentData = studentData;
 }

 public loadStudentData() {
   let studentData = JSON.parse(window.localStorage.getItem('studentData'));
   return studentData;
 }

 public editCompleted() {
   this.studentData = null;
   localStorage.removeItem("studentData");
 }
}
