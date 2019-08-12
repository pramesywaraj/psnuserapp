import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { ConfigService } from './config.service';

import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DaftartimService {

  constructor(private http: HttpClient, private configService: ConfigService) {
  }

 httpOptions = {
   headers: new HttpHeaders({
     'Content-Type': 'application/json',
     'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('token')),
   })
 }

 teamData = null;
 availStudent = null;
 contest = 1;
 student = 3;

 public getAllDaftarTim(id, contest, student): Observable<any> {
   return this.http.get<any>(
     this.configService.baseUrl + 'teams?school=' + id + '&populateContest=' + contest + '&populateStudent=' + student, this.httpOptions)
     .pipe(
       map(resp => {
         return resp;
       })
     )
 }  

 public postTeamRegistration(data): Observable<any> {
   return this.http.post<any>(
     this.configService.baseUrl + 'teams', JSON.stringify(data), this.httpOptions)
     .pipe(
       map(resp => {
           return resp;
       })
     )
 }  

 public deleteTeam(id): Observable<any> {
   return this.http.delete<any>(
     this.configService.baseUrl + 'teams/' + id, this.httpOptions)
     .pipe(
       map(resp => {
           return resp;
       })
     )
 }  

 public editTeamData(data): Observable<any> {
   return this.http.put<any>(
     this.configService.baseUrl + 'teams',  JSON.stringify(data), this.httpOptions)
     .pipe(
       map(resp => {
           return resp;
       })
     )
 }  

 public storeTeamData(teamData) {
   window.localStorage.setItem('teamData', JSON.stringify(teamData));
   this.teamData = teamData;
 }

 public loadTeamData() {
   let teamData = JSON.parse(window.localStorage.getItem('teamData'));
   return teamData;
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
   this.teamData = null;
   localStorage.removeItem("teamData");
 }
}
