import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-form5',
  templateUrl: './form5.component.html',
  styleUrls: ['./form5.component.css']
})
export class Form5Component implements OnInit {

  registerForm: any = FormGroup;

  submitted = false;

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit() {

    this.registerForm = this.formBuilder.group({

      title: ['', Validators.required],

      firstName: ['', Validators.required],

      lastName: ['', Validators.required],

      email: ['', [Validators.required, Validators.email]],

      password: ['', [Validators.required, Validators.minLength(6)]],

      confirmPassword: ['', Validators.required],

      acceptTerms: [false, Validators.requiredTrue]

    }, {

      // validator: ConfirmPasswordValidator.MatchPassword

    });

  }

  // convenience getter for easy access to form fields

  get f() { return this.registerForm.controls; }

  onSubmit() {

    this.submitted = true;

    // stop here if form is invalid

    if (this.registerForm.invalid) {

      return;

    }

    // display form values on success

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));

  }

  onReset() {

    this.submitted = false;

    this.registerForm.reset();

  }



}



