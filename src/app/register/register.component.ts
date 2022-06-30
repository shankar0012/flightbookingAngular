import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: any = FormGroup;

  submitted = false;

  constructor(private formBuilder: FormBuilder, private userService: UserService) {
    this.registerForm = this.formBuilder.group({



      FullName: ['', Validators.required],

      UserName: ['', Validators.required],

      EmailId: ['', [Validators.required, Validators.email]],

      Password: ['', [Validators.required, Validators.minLength(6)]]



    }, {

      // validator: ConfirmPasswordValidator.MatchPassword

    });
  }

  ngOnInit() {



  }

  // convenience getter for easy access to form fields

  get f() { return this.registerForm.controls; }

  onSubmit() {

    this.submitted = true;

    // stop here if form is invalid

    if (this.registerForm.invalid) {

      return;

    }
    this.userService.Register(this.registerForm.value).subscribe(res => {
      if (res != null)
        //var result1=  JSON.stringify(res.value);

        if (res.statusCode == 200) {
          alert("User successfully registerd.");
         
        }
         if (res.statusCode == 201)
        {
          alert("User Already exits");
        }
         if(res.statusCode == 417)
        {
      alert("Error in user registration");
        }
        

    });

    // display form values on success

    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));

  }

  onReset() {

    this.submitted = false;

    this.registerForm.reset();

  }



}