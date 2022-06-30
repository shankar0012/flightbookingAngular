import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {
  onSubmit(value1:any)
  {
    console.log("value is",value1)
  }
  constructor() {
    this.formdata=new FormGroup({
      username:new FormControl('CTS'),
      username1:new FormControl('Batch22')

    })
   }
  formdata:FormGroup;
      username:any;
      username1:any;
     

  ngOnInit(): void {
   
  }

}
