import { Injectable } from '@angular/core';
import { FormControl, NG_VALIDATORS, AbstractControl, ValidationErrors, Validator } from '@angular/forms';

@Injectable({
  providedIn: 'root',

})
export class CustomValidatorServiceService  {

  constructor() { }

  static nameValidator(control: FormControl): ValidationErrors {
    if (control.value) {
       return control.value >= 5 ? null : { msg: 'Le nom doit comprendre au moins 5 carateres' };
    }
    return null;
  }

  static matchPassword(Ac: AbstractControl) {
    const password = Ac.get('password').value; // to get value in input tag
    const confirmPassword = Ac.get('confirmPassword').value; // to get value in input tag
    if (password !== confirmPassword) {
      return Ac.get('confirmPassword').setErrors({ NoPassswordMatch: true });
    } else {
        return null;
    }
}
}
