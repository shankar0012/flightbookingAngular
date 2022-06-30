import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FlightService } from '../flight.service';
@Component({
  selector: 'app-blockairline',
  templateUrl: './blockairline.component.html',
  styleUrls: ['./blockairline.component.css']
})
export class BlockairlineComponent implements OnInit {

  AddairlineForm: any = FormGroup;
AirlinesData:any;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private flightService:FlightService) {
    this.AddairlineForm = this.formBuilder.group({

      AirlineId: ['', Validators.required],     
      Modtime: [Date],      
      IsActive: [false]   
      

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
     
 }
  else
  alert("Error in loading data");
 
});
  }
  // convenience getter for easy access to form fields

  get f() { return this.AddairlineForm.controls; }

  onSubmit() {

    this.submitted = true;

    // stop here if form is invalid

    if (this.AddairlineForm.invalid) {

      return;

    }
    this.flightService.UpdateAirLine(this.AddairlineForm.value).subscribe(res=> { 
      if(res!=null)
      {
              
          alert(res.message)
       
      }
      // alert(res);
       else
       alert("Error in service");



      
    });

    // display form values on success

    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));

  }
  onReset() {

    this.submitted = false;

    this.AddairlineForm.reset();

  }

 
}
