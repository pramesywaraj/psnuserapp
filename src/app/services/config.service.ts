import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  baseUrl: string;

  constructor() { 
    // this.baseUrl = "http://backend-mpkmb.codepanda.id/";
    this.baseUrl = "https://apipestasains.ipb.ac.id/"; //Server Asli
    // this.baseUrl = "http://ci.apps.cs.ipb.ac.id/patriotpangan/api/"; //Server Test
    // this.baseUrl = "http://localhost:3000/";
    
  }
}