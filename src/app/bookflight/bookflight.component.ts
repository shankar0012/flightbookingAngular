import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FlightService } from '../flight.service';
@Component({
  selector: 'app-bookflight',
  templateUrl: './bookflight.component.html',
  styleUrls: ['./bookflight.component.css']
})
export class BookflightComponent implements OnInit {
  ScheduleAirlineForm: any = FormGroup;
  AirlinesData:any;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private flightService: FlightService) {
    this.ScheduleAirlineForm = this.formBuilder.group({


      UserId: ['', Validators.required],
      AirlineId: ['', Validators.required],

      FromCity: ['', Validators.required],

      ToCity: ['', Validators.required],

      FromTime: ['', Validators.required],
      ToTime: ['', Validators.required],
     
      
      NoOfSeats: ['', Validators.required],
      Amount: ['', Validators.required],
      Discount: ['', Validators.required],
      TripType: ['', Validators.required],
      EmailId: ['', [Validators.required, Validators.email]],
      TotalAmount: ['', Validators.required],
      FlightName: ['', Validators.required],
      FlightNo: ['', Validators.required],

    });
  }

  ngOnInit() {
    
    this.getFormData();
   
   }
 
   getFormData(){
     this.flightService.GetAirLinelist().subscribe(res=> { 
       if(res!=null)
  {
    this.AirlinesData=res;  
    //  alert(res.message)
    
  }
  // alert(res);
   else
   alert("Error in loading data");
 
 
  
 });
   }

  // convenience getter for easy access to form fields

  get f() { return this.ScheduleAirlineForm.controls; }

  onSubmit() {

    this.submitted = true;

    // stop here if form is invalid

    if (this.ScheduleAirlineForm.invalid) {

      return;

    }
    this.flightService.ScheduleAirline(this.ScheduleAirlineForm.value).subscribe(res => {
      if (res != null)
        //var result1=  JSON.stringify(res.value);

      
          alert(res.message);
         
      
        else
      alert("Error in user registration");
        
        

    });

    // display form values on success

    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));

  }

  onReset() {

    this.submitted = false;

    this.ScheduleAirlineForm.reset();

  }



}
