import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { FlightService } from '../flight.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-searchflight',
  templateUrl: './searchflight.component.html',
  styleUrls: ['./searchflight.component.css']
})
export class SearchflightComponent implements OnInit {

  bookAirlineForm: any = FormGroup;
  AirlinesData: any;
  submitted = false;
  FlightSearchForm: any = FormGroup;
  flightlist1: any;
  flightlist: any;
  submitted1 = false;
  uname: any;
  userdetails: any;
  minDate = new Date;
  constructor(private formBuilder: FormBuilder, private flightService: FlightService, private userservice: UserService, private route: Router) {
    this.FlightSearchForm = this.formBuilder.group({



      FromCity: ['pune', Validators.required],

      ToCity: ['hyd', Validators.required],

      FromDate: ['', Validators.required],

      TripType: ['OneWay', Validators.required]



    });

  }



  getflightDeatils(SchId2: any) {
    this.flightService.GetFlightDetails(SchId2).subscribe(res => {
      if (res != null) {
        this.flightlist1 = res;
        this.uname = 'shankar'//localStorage.getItem('UserName');

        this.userservice.GetUserDetailsbyUserName(this.uname).subscribe(res => {
          if (res != null) {
            this.userdetails = res;
            // alert(JSON.stringify(res))

            //alert(JSON.stringify(res));
            if (this.flightlist1 != null && this.userdetails != null)
              this.bookAirlineForm.patchValue({
                UserId: this.userdetails.userId,
                AirlineId: this.flightlist1.airlineId,

                FromCity: this.flightlist1.fromCity,

                ToCity: this.flightlist1.toCity,
                TripType: 'OneWay',
                FromTime: this.flightlist1.fromDate,
                ToTime: this.flightlist1.toDate,
                NoOfSeats: '',
                Amount: this.flightlist1.ticketCost,
                Discount: this.flightlist1.discount,
                TotalAmount: '',
                EmailId: this.userdetails.emailId,

                FlightName: this.flightlist1.flightName,
                FlightNo: this.flightlist1.flightNo,
              });
          }
          else {
            alert("session expired please relogin")
          }
        });
      }
      else {
        alert("Data not found");
      }
    });
  }
  bookTicket(SchId1: any) {
    //localStorage.setItem('flightno',flightno);

    this.displayStyle = "block";


    this.getflightDeatils(SchId1);


  }
  ngOnInit() {


    this.Getairlines();
    this.bookAirlineForm = this.formBuilder.group({


      UserId: ['', Validators.required],
      AirlineId: ['0', Validators.required],

      FromCity: ['', Validators.required],

      ToCity: ['', Validators.required],

      FromTime: ['', Validators.required],
      ToTime: ['', Validators.required],


      NoOfSeats: ['1', Validators.required],
      Amount: ['', Validators.required],
      Discount: ['', Validators.required],
      TripType: ['OneWay', Validators.required],
      EmailId: ['', [Validators.required, Validators.email]],
      TotalAmount: ['', Validators.required],
      FlightName: ['', Validators.required],
      FlightNo: ['', Validators.required],
      PersonDetails: new FormArray([]),
    });
  }

  Getairlines() {
    this.flightService.GetAirLinelist().subscribe(res => {
      if (res != null) {
        this.AirlinesData = res;

      }
      else
        alert("Error in loading data");

    });
  }

  displayStyle = "none";

  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }
  // convenience getter for easy access to form fields

  get f() { return this.FlightSearchForm.controls; }
  get b() { return this.bookAirlineForm.controls; }
  get t() { return this.b.PersonDetails as FormArray; }
  get ticketFormGroups() { return this.t.controls as FormGroup[]; }
  onSubmit() {

    this.submitted = true;

    // stop here if form is invalid

    if (this.FlightSearchForm.invalid) {

      return;

    }

    this.flightService.SearchFlight(this.FlightSearchForm.value).subscribe(res => {
      if (res != null) {
        if (res.hasOwnProperty('message')) {
          alert("Data not found");
          this.flightlist=null;
        }
        else {
          this.flightlist = res;
        }
        // alert(JSON.stringify(res));
      }
      else {

      }


    }, (error) => {
      console.error(error)
      alert(error.statusText);
    });

    // display form values on success

    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));

  }

  onReset() {

    this.submitted = false;

    this.FlightSearchForm.reset();

  }


  onbookSubmit() {

    this.submitted1 = true;

    // stop here if form is invalid

    if (this.bookAirlineForm.invalid) {
      alert("Please enter passanger details");
      return;

    }
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.bookAirlineForm.value, null, 4));
    this.flightService.BookTicket(this.bookAirlineForm.value).subscribe(res => {
      if (res != null)
      //var result1=  JSON.stringify(res.value);

      {
        alert(res.message);
        this.closePopup();
      }

      else
        alert("Error in user registration");



    }, (error) => {                              //Error callback
      console.error(error)
      alert(error.statusText);

      //throw error;   //You can also throw the error to a global error handler
    });

    // display form values on success

    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));

  }

  onOptionSelected(data: any) {
    let noofpersons = this.bookAirlineForm.controls['NoOfSeats'].value;
    let Ticketdiscount = this.bookAirlineForm.controls['Discount'].value;
    let Ticketcost = this.bookAirlineForm.controls['Amount'].value;
    let tamount = ((Ticketcost * noofpersons) - Ticketdiscount);
    this.bookAirlineForm.patchValue({ TotalAmount: tamount });

    const numberOfTickets = noofpersons || 0;
    if (this.t.length < numberOfTickets) {
      for (let i = this.t.length; i < numberOfTickets; i++) {
        this.t.push(this.formBuilder.group({
          name: ['', Validators.required],
          age: ['', Validators.required],
          gender: ['Male', Validators.required],
          mealType: ['Veg', Validators.required],
          seatNo: ['', Validators.required],
        }));
      }
    } else {
      for (let i = this.t.length; i >= numberOfTickets; i--) {
        this.t.removeAt(i);
      }
    }
  }

}
