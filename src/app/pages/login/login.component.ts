import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  hide = true;

  loginForm: FormGroup;

  private subscription: Subscription;


  constructor(private formBuilder: FormBuilder, public LoginService: LoginService, public router: Router) { 
    this.loginForm = formBuilder.group(
      {
        'username' : this.username,
        'password' : this.password,
      }
    );
  }

  ngOnInit() {
  }

  postLoginSchool() {
    this.subscription = this.LoginService.postLoginData(this.loginForm.value).subscribe((data) => {
      alert("Anda berhasil Login");
      this.router.navigate(['admin/daftarlomba']);
    },
    err => {
      console.log(err)
      alert(err.error.message);
    })
  }  

  ngOnDestroy() {
    if(this.subscription) this.subscription.unsubscribe();
  }

}
