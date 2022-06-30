import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  baseUrl : string;
  
  url : string;
  forecast: any;
  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:8081/api/Flight/test';
   
    this.url="";
   }
   public getAirlines():Observable<any>{

    const headers={'content-type':'application/json','Access-Control-Allow-Origin': '*',};

    return this.http.get(this.baseUrl,{'headers':headers});

   

  }
   //return this.forecast;
     //.catch(this.handleError);
 }
//  private handleError(error: any) {
//    // In a real world app, we might use a remote logging infrastructure
//    let errMsg: string;
//    errMsg = error.message ? error.message : error.toString();
//    console.error(errMsg);
//    return Observable.throw(errMsg);
//  }


