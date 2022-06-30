import { Component, OnInit } from '@angular/core';
import { FormBuilder,AbstractControl, FormGroup, Validators } from '@angular/forms';

// import custom validator to validate that password and confirm password fields match

//import { ConfirmPasswordValidator } from '../_helpers/mismatch.validator'

@Component({
  selector: 'app-form4',
  templateUrl: './form4.component.html',
  styleUrls: ['./form4.component.css']
})
export class Form4Component implements OnInit {

  registerForm:any= FormGroup;

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

  

