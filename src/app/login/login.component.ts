import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public loginForm!: FormGroup;

  constructor(
    private fB: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private auth: AuthServiceService
  ) { }
  ngOnInIt() {
    this.loginForm = this.fB.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }
  login() {
    this.http.get<any>("http://localhost:3000/signupUser").subscribe(res => {
      console.log(res);

    })
  }
  checkUser(name: any, password: any) {
    var output = this.auth.checkUserNameandPassword(name, password);
    if (output == true) {
      window.alert('Login successfully')
      this.router.navigate(['login'])
    } else {
      window.alert('Invalid username and password')

    }
  }

}