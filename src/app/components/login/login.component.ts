import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user/user.service';
import { Router } from '@angular/router';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  paswwordLength = 4;
  errorMessage: string;
  errorPassword: string;
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  constructor(private userService: UserService , private formBuilder: FormBuilder, private router: Router ) {}
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      login: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }
  get login() {return  this.loginForm.get('login'); }
  get password() {return this.loginForm.get('password'); }
  get f() {return this.loginForm.controls; }
  onSubmitted() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      this.errorMessage = 'Mail and / or password is incorrect';
      return;
    }
    this.loading = true;
    this.userService.login(this.login.value, this.password.value)
    .pipe(delay(4000))
    .subscribe(data => {
      localStorage.setItem('token', JSON.stringify(data));
      this.router.navigate(['/home']); },
      error => {
        if (error.status === 404) {
          this.errorMessage = 'No user was found with this email/password';
        }
        if (error.status === 400) {
          this.router.navigate(['/page-not-found']);
        }
        this.loading = false;
      });
    }
  }
