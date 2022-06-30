import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  LoginForm: any = FormGroup;

  submitted = false;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private route: Router) {
    this.LoginForm = this.formBuilder.group({

      UserName: ['', Validators.required],

      Password: ['', [Validators.required, Validators.minLength(6)]]


    }, {

      // validator: ConfirmPasswordValidator.MatchPassword

    });
  }

  ngOnInit() {

    localStorage.removeItem('UserName');

  }

  // convenience getter for easy access to form fields

  get f() { return this.LoginForm.controls; }

  onSubmit() {

    this.submitted = true;

    // stop here if form is invalid

    if (this.LoginForm.invalid) {

      return;

    }
    this.userService.login(this.LoginForm.value).subscribe(res => {
      if (res != null) {
        localStorage.setItem('UserName', this.LoginForm.value.UserName);
        localStorage.removeItem('Token');
        localStorage.setItem('Token', res.message);
        //alert("Login Successfully")
        if (this.LoginForm.value.UserName == "admin") {
          this.route.navigate(['adminmenu']);
        }
        else {
          this.route.navigate(['Usermenu']);

        }
      }
      else
      {
        alert("Error in user loging");
      }
      


    });

    // display form values on success

    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));

  }


}
