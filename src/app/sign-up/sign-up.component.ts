import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm, FormControl } from "@angular/forms"
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  signupForm!: FormGroup;


  constructor(
    private fB: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInIt() {
    this.signupForm = this.fB.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  signup() {
    this.http.post<any>("http://localhost:3000/signupUser", this.signupForm.value)
      .subscribe(res => {
        console.log(res);

        alert("signup successful");
        this.signupForm.reset();
        this.router.navigate(['login'])
      })

  }
}
