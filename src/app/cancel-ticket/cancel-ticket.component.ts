import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FlightService } from '../flight.service';
import { UserService } from '../user.service';
@Component({
  selector: 'app-cancel-ticket',
  templateUrl: './cancel-ticket.component.html',
  styleUrls: ['./cancel-ticket.component.css']
})
export class CancelTicketComponent implements OnInit {


  AirlinesData: any;
  submitted = false;
  FlightSearchForm: any = FormGroup;
  flightlist1: any;
  ticketlist: any;

  uname: any;
  userdetails: any;
  minDate = new Date;
  constructor(private formBuilder: FormBuilder, private flightService: FlightService, private userservice: UserService, private route: Router) {
    this.FlightSearchForm = this.formBuilder.group({
      PNR: ['PNR00002'],
    });

  }


  getflightDeatils(SchId2: any) {
    if (confirm("Are you sure to delete " + SchId2)) {
      this.flightService.CancelTicket(this.FlightSearchForm.value).subscribe(res => {
        if (res != null) {
          if (res.hasOwnProperty('message')) {
            alert(res.message);
            this.onReset();
          }
        }
        else {
          alert("Error Occured");
        }
      });
    }
  }
  ViewTicket(SchId1: any) {
    //localStorage.setItem('flightno',flightno);
    this.getflightDeatils(SchId1);


  }
  ngOnInit() {


    this.Getairlines();
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


  // convenience getter for easy access to form fields

  get f() { return this.FlightSearchForm.controls; }

  onSubmit() {

    this.submitted = true;

    // stop here if form is invalid

    if (this.FlightSearchForm.invalid) {

      return;

    }
    this.flightService.SearchTicket(this.FlightSearchForm.value).subscribe(res => {
      if (res != null) {
        if (res.hasOwnProperty('message')) {
          alert(res.message);
        }
        else {
          if (res.length > 0) {
            this.ticketlist = res;

          }
          else {
            alert("Data not found")

          }
          // alert(JSON.stringify(this.ticketlist))
        }
        // alert(JSON.stringify(res));
      }



    });

    // display form values on success

    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));

  }

  onReset() {

    this.submitted = false;
    this.ticketlist = null
    this.FlightSearchForm.reset();

  }




}




