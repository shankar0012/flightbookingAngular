import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FlightService } from '../flight.service';
@Component({
  selector: 'app-scheduleairline',
  templateUrl: './scheduleairline.component.html',
  styleUrls: ['./scheduleairline.component.css']
})
export class ScheduleairlineComponent implements OnInit {

  ScheduleAirlineForm: any = FormGroup;
  AirlinesData:any;
  submitted = false;
  minDate =new Date;
  constructor(private formBuilder: FormBuilder, private flightService: FlightService) {
    this.ScheduleAirlineForm = this.formBuilder.group({



      AirlineId: ['', Validators.required],

      FromCity: ['', Validators.required],

      ToCity: ['', Validators.required],

      FromDate: ['', Validators.required],
      ToDate: ['', Validators.required],
      ScheduledDays: ['', Validators.required],
      InstrumentUsed: ['', Validators.required],
      BCSeats: ['', Validators.required],
      NBCSeats: ['', Validators.required],
      TicketCost: ['', Validators.required],
     
      Meals: ['', Validators.required],
      Discount:['', Validators.required],
      FlightNo: ['', Validators.required],
      FlightName:['', Validators.required]



    });
  }

  ngOnInit() {
    
    this.getFormData();
   
   }
 
   getFormData(){
     this.flightService.GetActiveAirLinelist().subscribe(res=> { 
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