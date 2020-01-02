import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CharacterService } from 'src/app/services/character/character.service';
import { Character } from 'src/app/models/character';
import { CustomValidatorServiceService } from 'src/app/services/customValidator/custom-validator-service.service';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent implements OnInit {

  createForm: FormGroup;

  constructor(private fb: FormBuilder, private serviceCreate: CharacterService, private ctsValidators: CustomValidatorServiceService) {
    this.createForm = this.fb.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      power: ['', [Validators.required, ctsValidators]],
     // inventoryControl: [null, [CustomValidation]]
    });
  }

  ngOnInit() {
  }

  submitForm() {
  }
}
