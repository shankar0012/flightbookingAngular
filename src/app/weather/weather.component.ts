import { Component, OnInit } from '@angular/core';
import { SearchFlightDS } from '../SearchFlightDS';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

 
 
  constructor(private _weatherService: UserServiceService) {    
  }
  
 ngOnInit(): void {  
    this.getFormData(); 
 }  getFormData(){   

   this._weatherService.getAirlines().subscribe((res)=>{
    console.log("start"); 
   // console.log(res);
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(res.value));
     // alert(res);    
       if(res.data !=null && res.data !=undefined){ 
            console.log(res.data);   
       console.log("Date");     

         }
       console.log("End");     
      }, 
           );  
        }


}
