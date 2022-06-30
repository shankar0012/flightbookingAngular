import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form3',
  templateUrl: './form3.component.html',
  styleUrls: ['./form3.component.css']
})
export class Form3Component implements OnInit {
 // title:string="register form";
  model:any={};
   onSubmit() {      
            
       alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model, null, 4));    
    }   
  constructor() {
    
  }

  ngOnInit(): void {
   }  
     

  }
