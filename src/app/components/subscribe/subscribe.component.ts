import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/app/models/user';
import { delay , first} from 'rxjs/operators';
import { CustomValidatorServiceService } from 'src/app/services/customValidator/custom-validator-service.service';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {

  constructor(private fb: FormBuilder, private userService: UserService) {}
  formRegister: FormGroup;
  loading = false;
   submitted = false;
   userRegister: User;
  ngOnInit() {
    this.formRegister = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(4)]],
      lastName: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      confirmPassword: ['', [Validators.required]]
    },
    {
      // check whether our password and confirm password match
      validator:  CustomValidatorServiceService.matchPassword
   });
  }
   // Acces to the controls form
  get f() { return this.formRegister.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.formRegister.invalid) {
      return;
    }

    this.userRegister = new User();
    this.userRegister.firstName = this.formRegister.get('firstName').value;
    this.userRegister.mail = this.formRegister.get('email').value;
    this.userRegister.lastName = this.formRegister.get('lastName').value;
    this.userRegister.password = this.formRegister.get('password').value;
    this.loading = true;
    console.log(this.userRegister );
    this.userService.createUser(this.userRegister)
    .pipe(first(), delay(3000))
    .subscribe(
      result => console.log( 'user addednsueccefully: ', result),
      errors => console.log('errors', errors)
    );
  }
}
