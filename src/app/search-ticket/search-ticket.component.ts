import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FlightService } from '../flight.service';
import { UserService } from '../user.service';
import { jsPDF } from 'jspdf'
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-search-ticket',
  templateUrl: './search-ticket.component.html',
  styleUrls: ['./search-ticket.component.css']
})
export class SearchTicketComponent implements OnInit {
 
  bookAirlineForm: any = FormGroup;
  AirlinesData: any;
  submitted = false;
  FlightSearchForm: any = FormGroup;
  flightlist1: any;
  ticketlist: any;
  
  uname: any;
  userdetails: any;
  minDate =new Date;
  constructor(private formBuilder: FormBuilder, private flightService: FlightService, private userservice: UserService, private route: Router) {
    this.FlightSearchForm = this.formBuilder.group({



      PNR: ['PNR00011'],

      EmailId: ['',[Validators.email]],
    });
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

    });
  }


  getflightDeatils(SchId2: any) {
    this.flightService.SearchTicket(this.FlightSearchForm.value).subscribe(res => {
      if (res != null) {
        this.flightlist1 = res;
        this.uname =localStorage.getItem('UserName');

        this.userservice.GetUserDetailsbyUserName(this.uname).subscribe(res => {
          if (res != null) {
            this.userdetails = res;
            // alert(JSON.stringify(res))

            //alert(JSON.stringify(res));
            
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
  ViewTicket(SchId1: any) {
    //localStorage.setItem('flightno',flightno);

    this.displayStyle = "block";


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

  displayStyle = "none";

  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
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
        if(res.hasOwnProperty('message'))
        {
          alert("Data not found");
        }
        else
        {
        this.ticketlist = res;
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

    this.FlightSearchForm.reset();

  }


  
   SavePDF() {  
    let data = document.getElementById('contentToConvert');
    //data?.append('Ticket');
    html2canvas(data as any).then(canvas => {
        var imgWidth = 210;
        //var pageHeight = 300;
        var imgHeight = canvas.height * imgWidth / canvas.width;
       // var heightLeft = imgHeight;
        const contentDataURL = canvas.toDataURL('image/png');
        let pdfData = new jsPDF('p', 'mm', 'a4');
        var position = 20;
        pdfData.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
        pdfData.save(`MyPdf.pdf`);
    });
  }
  


}
