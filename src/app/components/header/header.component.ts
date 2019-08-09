import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  opened: boolean;
  
  constructor(public router: Router, private LoginService: LoginService) { }

  ngOnInit() {
  }

  logOut(){
    alert('Anda Berhasil Keluar');
    this.LoginService.logout();
    this.router.navigate[('/login')];
  }

}
