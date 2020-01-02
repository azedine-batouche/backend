import { Component, OnInit, SystemJsNgModuleLoader, Input } from '@angular/core';
import { FaqService } from 'src/app/services/faq/faq.service';
import { Faq } from 'src/app/models/faq';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

declare const toggleAccordion: any;

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  messageToSendP  =  ' ' ;
  listFaq: Faq[];
  faqForm: FormGroup;
  sendFaq: Faq;
  submitted = false;

  constructor(private serviceFaq: FaqService, private fb: FormBuilder, private router: Router ) {
    this.faqForm =  this.fb.group({
      questionInput: ['', Validators.required]
    });
   }

  ngOnInit() {
    this.serviceFaq.refreshNeeded.subscribe(
      () => {
        this.findAllFaq();
      });
    this.findAllFaq();
  }

get f() { return this.faqForm.controls; }

  findAllFaq() {
    this.serviceFaq.findAllFaq()
    .pipe()
    .subscribe(
      data => this.listFaq = data,
      errors => console.log(errors));
  }
  submitForm() {
    this.submitted = true;
    if (this.faqForm.valid) {
      this.sendFaq = new Faq();
      this.sendFaq.question = this.faqForm.get('questionInput').value;
      this.serviceFaq.createFaq(this.sendFaq).subscribe(
        data => console.log(data),
        error => console.log(error)
      );
      this.faqForm.reset();
    }
  }

  toggleClass = (event) => {
    event.target.classList.toggle('active');
    event.target.nextElementSibling.classList.toggle('active');
   }
}

