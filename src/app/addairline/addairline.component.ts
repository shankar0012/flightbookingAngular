import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FlightService } from '../flight.service';
@Component({
  selector: 'app-addairline',
  templateUrl: './addairline.component.html',
  styleUrls: ['./addairline.component.css']
})
export class AddairlineComponent implements OnInit {

  
  AddairlineForm: any = FormGroup;

  submitted = false;

  constructor(private formBuilder: FormBuilder,private userService:FlightService) {
    this.AddairlineForm = this.formBuilder.group({

      AirlineName: ['', Validators.required],     
      Addtime: [Date],      
      IsActive: [true]   
      

    }, {

      // validator: ConfirmPasswordValidator.MatchPassword

    });
  }

  ngOnInit() {

   

  }

  // convenience getter for easy access to form fields

  get f() { return this.AddairlineForm.controls; }

  onSubmit() {

    this.submitted = true;

    // stop here if form is invalid

    if (this.AddairlineForm.invalid) {

      return;

    }
    this.userService.Airline(this.AddairlineForm.value).subscribe(res=> { 
           if(res!=null)
      {
              
          alert(res.message)
       
      }
      // alert(res);
       else
       alert("Error in user loging");


      
    });

    // display form values on success

    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));

  }
  onReset() {

    this.submitted = false;

    this.AddairlineForm.reset();

  }

 
}
