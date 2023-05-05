import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  // define error messages
  nameError = '';
  emailError = '';
  subjectError = '';
  detailsError = '';

  // indicate if form has been submitted
  isSubmitted = false;

  // function to validate form fields
  validateFields(form: NgForm) {
    if (form.controls.name.invalid && form.controls.name.touched) {
      this.nameError = 'Please enter a valid name.';
    } else {
      this.nameError = '';
    }

    if (form.controls.email.invalid && form.controls.email.touched) {
      this.emailError = 'Please enter a valid email address.';
    } else {
      this.emailError = '';
    }

    if (form.controls.subject.invalid && form.controls.subject.touched) {
      this.subjectError = 'Please enter a subject.';
    } else {
      this.subjectError = '';
    }

    if (form.controls.details.invalid && form.controls.details.touched) {
      this.detailsError = 'Please enter some details.';
    } else {
      this.detailsError = '';
    }
  }

  onSubmit(form: NgForm) {
    this.validateFields(form);

    this.isSubmitted = true;

    if (form.valid) {
      form.reset();
    }
  }
}
